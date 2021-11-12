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

const screenHeight = Dimensions.get('window').height;

const ListaTomasInventario = props => {
  const {tomasInventario, usuario, handleCurrentTomaInv, handleUpdate} = props;

  const [listOfTomaInv, setListOfTomaInv] = useState([]);

  const init = async tomasInventario => {
    setListOfTomaInv([]);
    setListOfTomaInv(tomasInventario);
  };

  useEffect(() => {
    init(tomasInventario);
    /* return () => {
 
      setListOfTomaInv([]);
    }; */
  }, [tomasInventario]);

  return (
    <>
      <Header title={'Tomas de inventario'} />
      <Body style={styles.body}>
        <Title title={'Por favor, elija una toma de inventario:'} />
        <ScrollView style={styles.scrollView}>
          {listOfTomaInv.map(({TOMA_INVENTARIO}, index) => (
            <CardTomaInventario
              key={index}
              tomaInventario={TOMA_INVENTARIO}
              openDetalle={() => {
                handleCurrentTomaInv?.(TOMA_INVENTARIO);
              }}
              handleUpdate={handleUpdate}
            />
          ))}
          {listOfTomaInv.length === 0 && (
            <Text>
              Aun no ha sido asignado a procesos de toma de inventario
            </Text>
          )}
        </ScrollView>
      </Body>
    </>
  );
};
export default ListaTomasInventario;

const styles = StyleSheet.create({
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
