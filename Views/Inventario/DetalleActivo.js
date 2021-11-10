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
 const {currActivo, goBack}=props;
 
  return (
    <View>
      <Title title={'Detalle de activo:'} />
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => {
          goBack?.();
        }}>
        <Icon name="arrow-back" size={20} color={mainColor} />
        <Text>Regresar</Text>
      </TouchableOpacity>

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
        {locaciones.map((locacion, index) => (
          <CardTomaInventario
            key={index}
            locacion={locacion}
            openDetalle={() => selectLocacion(locacion)}
          />
        ))}
      </ScrollView>
    </View>
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
