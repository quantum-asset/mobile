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
import TagIcon from '../Icons/TagIcon';

const CardTomaInventario = props => {
  const {openDetalle, tomaInventario} = props;
  //console.log('CardTomaInventario props', props);
  const {
    FECHA_INICIO = 'Nov. 23, 2022',
    CANT_LOCACIONES = 12,
    CANT_ACTIVOS = 1645,
    ACTIVOS_ENCONTRADOS = 0,
    POR_PROCESAR,
    ES_MUESTREO = 0,
    LOCACIONES = [],
  } = tomaInventario;
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

      <View>
        <Text>{`${CANT_ACTIVOS} Activos Fijos`}</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <TagIcon />
          <Text style={styles.textbtn}>Iniciar Toma de Inventarios</Text>
        </TouchableOpacity>
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
