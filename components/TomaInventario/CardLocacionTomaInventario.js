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
import Button from '../Button/Button';
import {TomaInventarioController} from '../../controller/TomaInventarioController';
const screenWidth = Dimensions.get('window').width;

const CardLocacionTomaInventario = props => {
  console.log('CardLocacionTomaInventario props', Object.keys(props));
  const {openDetalle, locacion, handleUpdate, currTomaInv} = props;
  //console.log('CardTomaInventario props', props);
  const {
    DENOMINACION = 'DENOMINACION DE LA LOCCION',
    DIRECCION,
    DESCRIPCION,
    OBSERVACION,
    OBSERVACIONES,
    ID_LOCACION,
  } = locacion;

  const [observaciones, setObservaciones] = useState(OBSERVACIONES || '');
  const [openModal, setOpenModal] = useState(false);
  const handleSaveObservacion = async () => {
    const {success, data, message} =
      await TomaInventarioController.addObservacionLocacionXTomaInventario(
        currTomaInv.ID_TOMA_INVENTARIO,
        ID_LOCACION,
        observaciones,
      );
    console.log('TIxL data', data);
    console.log('TIxL message', message);
    uppdateObservacionses();
    handleCloseModal();
  };
  const handleCloseModal = async () => {
    setOpenModal(false);
    setObservaciones(OBSERVACIONES || '');
  };
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
    openDetalle?.();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fecha}>{DENOMINACION}</Text>
      </View>
      <View>
        <Text style={styles.title}>{'Dirección: ' + DIRECCION || '-'}</Text>
      </View>

      {/* <View>
        <Text>{DESCRIPCION || '-'}</Text>
      </View> */}

      <View>
        <Text style={styles.title}>{`Observaciones: ${
          OBSERVACIONES || '-'
        }`}</Text>
      </View>

      <View style={styles.action}>
        <Button
          type="secondary"
          onPress={handleOpenModal}
          label="Agregar Observaciones"
        />
        <Button
          type="primary"
          onPress={handlePress}
          label="Iniciar Toma de Inventario">
          <TagIcon />
        </Button>
      </View>

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
            placeholder={'Observaciones en la locación ' + DENOMINACION}
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
export default CardLocacionTomaInventario;

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    alignItems: 'flex-start',
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
    flexDirection: 'row',
    width: '100%',
    //backgroundColor: '#86180e',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
