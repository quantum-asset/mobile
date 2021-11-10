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
const screenHeight = Dimensions.get('window').height;

const ListaActivoXLocaciones = props => {
  const {tomasInventario, usuario, currTomaInv, ID_LOCACION, goBack} = props;
  const [listActivos, setListActivos] = useState([]);
  const [listActivosFiltrada, setListActivosFiltrada] = useState([]);

  const init = async ID_LOCACION => {
    //llamo a los activos por id de locacion
    //steo en ambas listas
    console.log("Vista de locaciones, call activos");
  };
  useEffect(() => {
    if (ID_LOCACION) {
      init(ID_LOCACION);
    }
  }, [ID_LOCACION]);
  return (
    <View>
      <Title title={'Toma de inventaio - Activos de la locación'} />
      {listActivosFiltrada.map((activo, key) => (
        <Text key={key}>activo</Text>
      ))}
    </View>
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
    backgroundColor: 'rgba(255,255,255,1)',
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
