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
import TagIcon from '../Icons/TagIcon';

const Login = props => {
  const {openDetalle, locacion} = props;

  const {
    ID_LOCACION = 0,
    POR_PROCESAR = 1,
    OBSERVACIONES = '-',
    ID_TOMA_INVENTARIO_X_LOCACION = 0,
    DIRECCION = '-',
    DENOMINACION = '-',
    CANT_ACTIVOS = 1645,
    ESTADO = 0,
    ES_MUESTREO = 0,
  } = locacion;
  const handlePress = () => {
    openDetalle?.(tomaInventario);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fecha}>{DENOMINACION}</Text>
      </View>

      <View>
        <Text style={styles.title}>{`Inventario ${
          ES_MUESTREO ? 'de muestreo' : ' programado (formal)'
        }`}</Text>
      </View>

      <View>
        <Text>{`${DIRECCION} Locaciones`}</Text>
      </View>

      <View>
        <Text>{`${CANT_ACTIVOS} Activos Fijos`}</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <TagIcon />
          <Text style={styles.textbtn}>Iniciar Toma de Inventarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
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
    width: '100%',
    textAlign: 'left',
  },
  fecha: {
    color: 'black',

    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    width: '100%',
    //backgroundColor: '#86180e',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btn: {
    //marginTop: 60,
    backgroundColor: '#86180e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 35,
    flexDirection: 'row',
    //width: '80%',
    padding: 4,
    borderRadius: 4,
  },
  textbtn: {
    color: 'white',
    fontSize: 12,
    padding: 4,
  },
});
