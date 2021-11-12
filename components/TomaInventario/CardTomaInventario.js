import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {parseDate} from '../../globals/date';
import {mainColor} from '../../globals/palette';
import TagIcon from '../Icons/TagIcon';
import SuperModal from '../SuperModal/SuperModal';
import {Dimensions} from 'react-native';
import {TomaInventarioController} from '../../controller/TomaInventarioController';
import Button from '../Button/Button';
const screenWidth = Dimensions.get('window').width;

const CardTomaInventario = props => {
  const {openDetalle, tomaInventario, handleUpdate} = props;
  //console.log('CardTomaInventario props', props);
  const {
    FECHA_INICIO = 'Nov. 23, 2022',
    CANT_LOCACIONES = 12,
    CANT_ACTIVOS = 1645,
    ACTIVOS_ENCONTRADOS = 0,
    POR_PROCESAR,
    ES_MUESTREO = 0,
    OBSERVACIONES,
    FECHA_FIN,
    LOCACIONES = [],
    ID_TOMA_INVENTARIO,
  } = tomaInventario;
  const [observaciones, setObservaciones] = useState(OBSERVACIONES || '');
  const [openModal, setOpenModal] = useState(false);
  const handleSaveObservacion = async () => {
    const {success, data, message} =
      await TomaInventarioController.addObservacionTomaInventario(
        ID_TOMA_INVENTARIO,
        observaciones,
      );
    console.log('TI data', data);
    console.log('TI message', message);
    uppdateObservacionses();
    handleCloseModal();
  };
  const handleCloseModal = async () => {
    setOpenModal(false);
    setObservaciones(OBSERVACIONES || '');
  };
  //avisar componente padre que se ha actualizado y debe llamar denuevo al API
  const uppdateObservacionses = () => {
    //controller
    handleUpdate?.();
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    // console.log('rendered CardToma',props);
    
  }, []);
  ///open detallea
  const handlePress = () => {
    openDetalle?.(tomaInventario);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fecha}>{parseDate(FECHA_INICIO)}</Text>
      </View>

      <View>
        <Text style={styles.title}>{`Inventario ${
          ES_MUESTREO ? 'de muestreo' : ' programado (formal)'
        }`}</Text>
      </View>

      <View>
        <Text>{`${CANT_LOCACIONES} Locaciones`}</Text>
      </View>

      {/* <View>
        <Text>{`${CANT_ACTIVOS} Activos Fijos`}</Text>
      </View> */}
      <View>
        <Text>{`Observaciones: ${OBSERVACIONES}`}</Text>
      </View>
      <View>
        <Text>{`Fecha de registro: ${FECHA_FIN}`}</Text>
      </View>

      <View style={styles.action}>
        <Button
          type="secondary"
          onPress={handleOpenModal}
          label="Agregar Observaciones"
        />
        <Button type="primary" onPress={handlePress} label="Ver Locaciones">
          {/* <TagIcon /> */}
        </Button>
      </View>
      {/*  <TouchableOpacity style={styles.btn} onPress={IniciarSesion}>
        <Text style={styles.textbtn}>Iniciar Sesion</Text>
      </TouchableOpacity> */}
      <SuperModal
        visible={openModal}
        onClose={handleCloseModal}
        title={'Observaciones'}
        actions={
          <View style={styles.action}>
            <Button
              type="secondary"
              onPress={handleCloseModal}
              label="Descartar"
            />
            <Button
              type="primary"
              onPress={handleSaveObservacion}
              label="Guardar"
            />
          </View>
        }>
        <View style={styles.modalContainer}>
          <Text style={styles.txtModalSub}>Agregar observaciones: </Text>
          <TextInput
            style={styles.inputArea}
            placeholder="Observaciones"
            onChangeText={txt => setObservaciones(txt)}
            value={observaciones}
            multiline={true}
            underlineColorAndroid="transparent"
            numberOfLines={4}
          />
        </View>
      </SuperModal>
    </View>
  );
};
export default CardTomaInventario;

const styles = StyleSheet.create({
  txtModalSub: {
    color: 'black',
    fontSize: 16,
  },
  modalContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  inputArea: {
    marginVertical: 4,
    borderWidth: 1,
    minHeight: 15,

    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    width: '100%',
    //width: (80 * screenWidth) / 100,
  },
 
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 6,
    margin: 5,
    padding: 6,
    alignItems: 'flex-start',
    with: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: 'black',
    //width: '100%',
    textAlign: 'left',
  },
  fecha: {
    fontSize: 20,
  },
  action: {
    paddingTop: 3,
    flexDirection: 'row',
    width: '100%',
    //backgroundColor: '#86180e',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  
});
