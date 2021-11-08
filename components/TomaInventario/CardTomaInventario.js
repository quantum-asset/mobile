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

const CardTomaInventario = props => {
  const {
    FECHA_INICIO = 'Nov. 23, 2022',
    CANT_LOCACIONES = 12,
    CANT_ACTIVOS = 1645,
    ACTIVOS_ENCONTRADOS = 0,
    ESTADO = 0,
    ES_MUESTREO = 0,
  } = props;
  useEffect(() => {
    console.log('rendered CardToma');
  }, []);
  return (
    <View style={styles.container}>
     <View >
        <Text style={styles.fecha}>{FECHA_INICIO}</Text>
      </View>

      <View >
        <Text style={styles.title}>{`Inventario ${
          ES_MUESTREO ? 'de muestreo' : ' programado (formal)'
        }`}</Text>
      </View>


      

      <View>
        <Text>{`${CANT_LOCACIONES} Locaciones`}</Text>
      </View>


      <View>
        <Text>{`${CANT_ACTIVOS} Activos Fijos`}</Text>
      </View>
      {/*  <TouchableOpacity style={styles.btn} onPress={IniciarSesion}>
        <Text style={styles.textbtn}>Iniciar Sesion</Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default CardTomaInventario;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    margin: 5,
    padding: 2,
    alignItems: 'flex-start',
    with:"100%",
    shadowColor: "#000",
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
    with: '100%',
    textAlign: 'left',
  },
  fecha: {
    fontSize: 20,
  },
  btn: {
    marginTop: 60,
    backgroundColor: '#86180e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 55,
    width: '80%',
    borderRadius: 4,
  },
  textbtn: {
    color: 'white',
    fontSize: 20,
  },
});
