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
const screenHeight = Dimensions.get('window').height;

const ListaActivoXLocaciones = props => {
  const {usuario, currTomaInv, ID_LOCACION, goBack} = props;
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
      Alert.alert('Estado del listado', message);
      console.log('=>', data);
      setListActivos(data);
      setListActivosFiltrada(data);
    } else {
      Alert.alert('Error', message);
    }
  };
  useEffect(() => {
    if (ID_LOCACION) {
      init(ID_LOCACION);
    }
  }, [ID_LOCACION]);
  return (
    <>
      <Header title={'Activos Fijos de ' + ID_LOCACION} />
      <Body style={styles.body}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            goBack?.();
          }}>
          <Icon name="arrow-back" size={30} color={mainColor} />
          <Text>Regresar a Tomas de inventario</Text>
        </TouchableOpacity>
        <Title title={'Toma de inventaio - Activos de la locación'} />
        <ScrollView style={styles.scrollView}>
          {listActivosFiltrada.map((activo, key) => (
            <Text key={key}>activo</Text>
          ))}
        </ScrollView>
      </Body>
    </>
  );
};
export default ListaActivoXLocaciones;

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 5,
    height: screenHeight - 280,
  },

  text: {
    fontSize: 42,
  },
  list: {
    height: '100%',
  },
  body: {
    //padding: 7,
    backgroundColor: 'rgba(255,255,255,0.94)',
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
