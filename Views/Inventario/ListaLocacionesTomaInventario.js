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
import CardLocacionTomaInventario from '../../components/TomaInventario/CardLocacionTomaInventario';
const screenHeight = Dimensions.get('window').height;

const ListaLocacionesTomasInventario = props => {

  const {currTomaInv, locaciones, goBack, handleCurrLocacion} = props;
  console.log('ListaLocacionesTomasInventario currTomaInv =>', currTomaInv);
  console.log('ListaLocacionesTomasInventario locaciones =>', locaciones);





  const [listOfLocaciones, setListOfLocaciones] = useState([]);
  const [listOfLocacionesFilter, setListOfLocacionesFilter] = useState([]);

  const init = async locaciones => {
    setListOfLocaciones(locaciones);
    setListOfLocacionesFilter(locaciones);
  };

  useEffect(() => {
    init(locaciones);
    return () => {
      setListOfLocacionesFilter([]);
      setListOfLocaciones([]);
    };
  }, [locaciones]);
  ////filtrooo
  const [filterLocacion, setFilterLocacion] = useState('');

  const handleChangeLocacion = txt => {
    setFilterLocacion(txt);
  };
  const filtrarPorLocacion = filtro => {
    console.log('filtro', filtro);
    if (filtro && filtro.length > 0) {
      const currList = listOfLocaciones;
      let data = [];
      for (let i = 0; i < currList.length; i++) {
        console.log('locaion', currList[i]);
        const LOCACION = currList[i];
        if (
          JSON.stringify(LOCACION)
            .toLocaleLowerCase()
            .includes(filtro.toLocaleLowerCase())
        ) {
          data.push(currList[i]);
        }
      }
      setListOfLocacionesFilter(data);
    } else {
      setListOfLocacionesFilter(listOfLocaciones);
    }
  };
  useEffect(() => {
    filtrarPorLocacion(filterLocacion);
  }, [filterLocacion]);

  const selectLocacion = locacion => {
    handleCurrLocacion?.(locacion);
  };
  return (
    <>
      <Header title={'Locaciones'} />
      <Body style={styles.body}>
        <TouchableOpacity
        style={styles.goBack}
        onPress={() => {
          goBack?.();
        }}>
        <Icon name="arrow-back" size={30} color={mainColor} />
        <Text>Regresar a Tomas de inventario</Text>
      </TouchableOpacity>
      <Title title={'Por favor, elija una locacion:'} />

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por locación"
          onChangeText={handleChangeLocacion}
        />
        <View style={styles.iconContainer}>
          <Icon name="search" size={30} color="white" />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {listOfLocacionesFilter.map((locacion, index) => (
          <CardLocacionTomaInventario
            key={index}
            locacion={locacion}
            openDetalle={() => selectLocacion(locacion)}
          />
        ))}
      </ScrollView>
      </Body>
      
    </>
  );
};
export default ListaLocacionesTomasInventario;

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
    backgroundColor: 'rgba(255,255,255,0.95)',
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
