import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Body from '../../components/Body/Body';
import Header from '../../components/Header/Header';
import {TomaInventarioController} from '../../controller/TomaInventarioController';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {mainColor} from '../../globals/palette';
import {ActivoController} from '../../controller/ActivoController';
import TableActivos from '../../components/Table/Table';
import ScanIcon from '../../components/Icons/ScanIcon';
import StopIcon from '../../components/Icons/StopIcon';
import DiscardIcon from '../../components/Icons/DiscardIcon';
import SaveIcon from '../../components/Icons/SaveIcon';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import SearchInput from '../../components/Form/SearchInput';

const screenHeight = Dimensions.get('window').height;

const ListaActivoXLocaciones = props => {
  const {
    usuario,
    currLocacion,
    currTomaInv,
    ID_LOCACION,
    goBack,
    handleCurrActivo,
    //
    listaActivosScanned,
    handleListaActivosScanned,
  } = props;
  //loista de activos
  const [listActivos, setListActivos] = useState([]);
  const [listActivosFiltrada, setListActivosFiltrada] = useState([]);
  //rafagas

  const initListarActivos = async ID_LOCACION => {
    //llamo a los activos por id de locacion
    //steo en ambas listas
    if (listaActivosScanned.length > 0) {
      console.log('Vista de locaciones, listaActivosScanned');
      setListActivos(listaActivosScanned);
      setListActivosFiltrada(listaActivosScanned);

      const cantEncontrados = listaActivosScanned.filter(
        x => x.ENCONTRADO === 1,
      ).length;
      console.log('Encontradoss', cantEncontrados);
      setActivosEncontrados(cantEncontrados);
    } else {
      console.log('Vista de locaciones, call activos');
      const {success, data, message} = await ActivoController.listXLocacion(
        ID_LOCACION,
      );
      if (success) {
        //Alert.alert('Estado del listado', message);
        console.log('=>', data.length);
        const dataToshow = data.map(x => ({...x, ENCONTRADO: 0}));
        setListActivos(dataToshow);
        setListActivosFiltrada(dataToshow);
        handleListaActivosScanned(dataToshow);
      } else {
        Alert.alert('Error', message);
      }
    }
  };
  useEffect(() => {
    if (ID_LOCACION) {
      initListarActivos(ID_LOCACION);
    }
  }, [ID_LOCACION]);

  ///////// FILTROOOOO
  const [activoFilter, setActivosFilter] = useState('');
  const handleChangeActivo = txt => {
    setActivosFilter(txt);
  };

  /// TOMA DE INVENTARIO
  const [activosEncontrados, setActivosEncontrados] = useState(0);
  const handleChangeActivosEncontrados = amount => {
    setActivosEncontrados(amount);
  };

  ///start scanning
  const [rafagas, setRafagas] = useState(15);
  const [scanStart, setScanStart] = useState(false);

  /**
   * siempre recibo la lista de actios actual, en teoria
   * @param {*} listaActivos
   */
  const scanning = async listaActivos => {
    console.log('trying to scan ', scanStart, rafagas);
    //consulto los ids que salen en el scanning
    const result = await TomaInventarioController.scan(listActivos);

    if (result) {
      const updatedList = [];
      for (let i = 0; i < listaActivos.length; i++) {
        if (result.includes(listaActivos[i].ID_ACTIVO)) {
          updatedList.push({...listaActivos[i], ENCONTRADO: 1});
        } else {
          updatedList.push(listaActivos[i]);
        }
      }

      const cantEncontrados = updatedList.filter(
        x => x.ENCONTRADO === 1,
      ).length;
      setActivosEncontrados(cantEncontrados);
      if (cantEncontrados === updatedList.length) {
        setScanStart(false);
        Alert.alert('Éxito', 'Se encontraron todos los activos :D');
      }
      setRafagas(rafagas - 1);
      handleListaActivosScanned(updatedList);
      setListActivosFiltrada(updatedList);
    } else {
      Alert.alert('Error', 'Ocurrio un error, porfavor reintente nuevamente');
    }
  };
  useEffect(() => {
    //simulo un bucle infinito, se contra cuando startScan sea falso o se acaben las rafagas
    if (scanStart && rafagas > 0) {
      scanning(listActivosFiltrada);
    } else {
      //puedo alterar la lista o las rafagas pero el7
      //scanStart unicamente cabia el valor por el boton de scanning
      if (!scanStart) {
        if (rafagas < 20) {
          setRafagas(20);
        }
      }
    }
  }, [listActivosFiltrada, scanStart]);
  const handleStartScanning = () => {
    console.log('init scan');
    setActivosFilter('');
    setScanStart(true);
  };
  const handleStoptScanning = () => {
    setScanStart(false);
    Alert.alert('Estatus', 'Se detuvo la busqueda');
  };
  // discard
  const handleDiscard = () => {
    Alert.alert(
      'Descartar cambios',
      `¿Está seguro que desea descartar los cambios?`,
    );
    setActivosEncontrados(0);
    const listRestore = listActivos.map(x => {
      const newX = {...x, ENCONTRADO: 0};
      return newX;
    });
    setListActivos(listRestore);
    setListActivosFiltrada(listRestore);
    handleListaActivosScanned(listRestore);
  };
  const handleProcesar = () => {
    Alert.alert(
      'Confirmación de procesamiento',
      `¿Está seguro de iniciar el registro de la toma de inventario?\n\nDepués no podrá agregar observaciones y/o evidencias.`,
    );
  };
  //prevent go back con activos ya escaneados
  const preventDiscardChanges = () => {
    if (activosEncontrados > 0) {
      Alert.alert(
        'Confirmación',
        'Seguro que desea descartar los cambios y regresar a la lista de locaciones?',
        [
          {
            text: 'Descartar',
            onPress: () => {
              handleListaActivosScanned?.([]);
              goBack?.();
            },
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => {},
          },
        ],
      );
    } else {
      handleListaActivosScanned?.([]);
      goBack?.();
    }
  };
  return (
    <>
      <Header title={'Toma de inventario'} />
      <Body style={styles.body}>
        <GoBack
          onGoBack={preventDiscardChanges}
          label="Regresar a Tomas de inventario"
        />

        {/** info locacion y activos count */}
        <View style={styles.infoBar}>
          <View style={styles.infoGroupLeft}>
            <Text style={styles.infoLabel}>Locacion</Text>
            <Text style={styles.infoData}>
              {currLocacion.DENOMINACION || '-'}
            </Text>
          </View>

          <View style={styles.infoGroupRight}>
            <Text style={styles.infoLabel}>Activos encontrados</Text>
            <Text
              style={
                styles.infoData
              }>{`${activosEncontrados}/${listActivos.length}`}</Text>
          </View>
        </View>
        {/**  filtro */}
        <SearchInput
          disabled={!scanStart}
          onChangeText={handleChangeActivo}
          placeholder="Buscar activo"
        />

        {/*  <Title title={'Toma de inventaio - Activos de la locación'} /> */}
        <ScrollView style={styles.scrollView}>
         
          <TableActivos
            scanStart={scanStart}
            openDetalle={e => handleCurrActivo?.(e)}
            dataActivos={listActivosFiltrada}
           
          />
        </ScrollView>
        <View style={styles.actionScanGroup}>
          {scanStart ? (
            <Button
              font={16}
              size={50}
              type="primary"
              label="Detener"
              onPress={handleStoptScanning}>
              <StopIcon size={30} color={'white'} />
            </Button>
          ) : (
            <Button
              font={16}
              size={50}
              type="primary"
              label="Escanear"
              onPress={handleStartScanning}>
              <ScanIcon size={30} color={'white'} />
            </Button>
          )}
          <Button
            font={16}
            size={50}
            disabled={scanStart}
            type="secondary"
            label="Descartar"
            onPress={handleDiscard}>
            <DiscardIcon size={30} color={mainColor} />
          </Button>

          <Button
            font={16}
            size={50}
            disabled={scanStart}
            type="primary"
            label="Procesar"
            onPress={handleProcesar}>
            <SaveIcon size={30} color={'white'} />
          </Button>
        </View>
      </Body>
    </>
  );
};
export default ListaActivoXLocaciones;

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#86180e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 50,
    //width: '80%',
    borderRadius: 4,
  },
  textbtn: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 2,
  },
  infoBar: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoGroupLeft: {
    padding: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
  },
  infoGroupRight: {
    padding: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
  },
  infoLabel: {},
  infoData: {
    color: 'black',
    fontSize: 13,
  },

  scrollView: {
    //backgroundColor: 'pink',
    //width:"100%",
    marginHorizontal: 5,
    height: screenHeight - 370,
  },
  actionScanGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(1,1,1,0.1)',
    paddingVertical: 7,
  },
  text: {
    fontSize: 42,
  },
  list: {
    height: '100%',
  },
  body: {
    //padding: 7,
    backgroundColor: 'rgba(255,255,255,0.92)',
  },

});
