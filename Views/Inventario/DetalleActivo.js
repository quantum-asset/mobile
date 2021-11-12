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

const DetalleActivo = props => {
  const {currActivo, goBack} = props;

  return (
    <>
      <Header title={'Detale de Activo'} />
      <Body style={styles.body}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            goBack?.();
          }}>
          <Icon name="arrow-back" size={20} color={mainColor} />
          <Text>Regresar</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          <Text>{`detalle del activo ${currActivo.CODIGO}`}</Text>
        </ScrollView>
      </Body>
    </>
  );
};
export default DetalleActivo;

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
    backgroundColor: 'rgba(255,255,255,0.91)',
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
