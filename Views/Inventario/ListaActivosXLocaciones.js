import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Body from '../../components/Body/Body';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import {TomaInventarioController} from '../../controller/TomaInventarioController';
import CardTomaInventario from '../../components/TomaInventario/CardTomaInventario';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {mainColor} from '../../globals/palette';
import {ActivoController} from '../../controller/ActivoController';
import TableActivos from '../../components/Table/Table';
import ScanIcon from '../../components/Icons/ScanIcon';
import StopIcon from '../../components/Icons/StopIcon';
import DiscardIcon from '../../components/Icons/DiscardIcon';
import SaveIcon from '../../components/Icons/SaveIcon';
const screenHeight = Dimensions.get('window').height;

const ListaActivoXLocaciones = props => {
  const {
    usuario,
    currLocacion,
    currTomaInv,
    ID_LOCACION,
    goBack,
    handleCurrActivo,
  } = props;
  const [listActivos, setListActivos] = useState([]);
  const [listActivosFiltrada, setListActivosFiltrada] = useState([]);

  const init = async ID_LOCACION => {
    //llamo a los activos por id de locacion
    //steo en ambas listas
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
    } else {
      Alert.alert('Error', message);
    }
  };
  useEffect(() => {
    if (ID_LOCACION) {
      init(ID_LOCACION);
    }
  }, [ID_LOCACION]);

  ///toma de inventario
  const [activosEncontrados, setActivosEncontrados] = useState(0);
  const handleChangeActivosEncontrados = amount => {
    setActivosEncontrados(amount);
  };
  const [activoFilter, setActivosFilter] = useState('');
  const handleChangeActivo = txt => {
    setActivosFilter(txt);
  };
  ///start scanning
  const [scanStart, setScanStart] = useState(false);
  const handleStartScanning = () => {
    console.log('init scan');
    setActivosFilter('');
    setScanStart(true);
    scanActivos();
  };
  const handleStoptScanning = () => {
    setScanStart(false);
    Alert.alert('Estatus', 'Se detuvo el escaneo');
  };
  const scanActivos = async () => {
    console.log('start scanning con scanStart...',scanStart);
    let i=0;
    //lista que ira cambiando
    let fullList=listActivosFiltrada;
    while (1) {
      console.log('calling... con state', scanStart);

      const result = await TomaInventarioController.scan(listActivos);

      if (result) {
        const updatedList = [];
        for (let i = 0; i < fullList.length; i++) {
          if (result.includes(fullList[i].ID_ACTIVO)) {
            updatedList.push({...fullList[i], ENCONTRADO: 1});
          } else {
            updatedList.push(fullList[i]);
          }
        }

        //setListActivos(updatedList);

        const amountOfEncontrados = updatedList.filter(
          x => x.ENCONTRADO === 1,
        ).length;
        const amountOfEncontradosTtolal = fullList.filter(
          x => x.ENCONTRADO === 1,
        ).length;

        
        setListActivosFiltrada(updatedList);
        handleChangeActivosEncontrados(amountOfEncontrados);
        
        fullList=updatedList;
        
        console.log('amountOfEncontrados', amountOfEncontrados);
        console.log('amountOfEncontradosTtolal', amountOfEncontradosTtolal);
        console.log('listActivos.length', fullList.length);
        
        
        if (amountOfEncontrados === fullList.length) {
          handleStoptScanning();
          Alert.alert('Estatus', 'Se encontraron todos los activos');
          break;
        }
      } else {
        Alert.alert('Error', 'Ocurrio un error, porfavor reintente nuevamente');
        break;
      }
      if (i===20) {
        setScanStart(false);
        console.log('ended by click');
        break;
      }
    }
    console.log('ended');
  };
  /* useEffect(() => {
    if (scanStart) {
      ///start scanning
      scanActivos();
    }
  }, [scanStart]); */
  return (
    <>
      <Header title={'Toma de inventario'} />
      <Body style={styles.body}>
        {/*  <Text>{activoFilter}</Text> */}
        <View style={styles.goBackContainer}>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => {
              goBack?.();
            }}>
            <Icon name="arrow-back" size={30} color={mainColor} />
            <Text>Regresar a Tomas de inventario</Text>
          </TouchableOpacity>
        </View>

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
        <View style={styles.inputGroup}>
          <TextInput
            disable={!scanStart}
            style={styles.input}
            placeholder="Buscar activo"
            onChangeText={handleChangeActivo}
          />
          <View style={styles.iconContainer}>
            <Icon name="search" size={30} color="white" />
          </View>
        </View>

        {/*  <Title title={'Toma de inventaio - Activos de la locación'} /> */}
        <ScrollView style={styles.scrollView}>
          {/*  {listActivosFiltrada.map((activo, key) => (
            <Text key={key}>activo</Text>
          ))} */}
          <TableActivos
            openDetalle={e => handleCurrActivo?.(e)}
            dataActivos={listActivosFiltrada}
            // handleCurrActivo={handleCurrActivo}
          />
        </ScrollView>
        <View style={styles.actionScanGroup}>
          {scanStart ? (
            <TouchableOpacity style={styles.btn} onPress={handleStoptScanning}>
              <StopIcon size={30} color={'white'} />
              <Text style={styles.textbtn}>Detener</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={handleStartScanning}>
              <ScanIcon size={30} color={'white'} />
              <Text style={styles.textbtn}>Escanear</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
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
            }}>
            <DiscardIcon size={30} color={'white'} />
            <Text style={styles.textbtn}>Descartar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              Alert.alert(
                'Confirmación de procesamiento',
                `¿Está seguro de iniciar el registro de la toma de inventario?\n\nDepués no podrá agregar observaciones y/o evidencias.`,
              );
            }}>
            <SaveIcon size={30} color={'white'} />
            <Text style={styles.textbtn}>Procesar</Text>
          </TouchableOpacity>
        </View>
      </Body>
    </>
  );
};
export default ListaActivoXLocaciones;

const styles = StyleSheet.create({
  goBackContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
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
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
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
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    height: 40,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    backgroundColor: 'white',
    width: '84%',
  },
  iconContainer: {
    alignItems: 'center',
    padding: '1%',
    height: '100%',
    with: '20%',
    backgroundColor: '#86180e',
  },
});
