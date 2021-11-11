import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Dimensions} from 'react-native';

import {mainColor} from '../../globals/palette';

const screenHeight = Dimensions.get('window').height;

const TableActivos = props => {
  const {dataActivos = [], openDetalle} = props;
  const handleAgregarDetalle = activo => {
    openDetalle?.(activo);
  };
  return (
    <View style={styles.tableContainer}>
      <View style={styles.rowTable}>
        <Text style={{...styles.cellData20, color: 'black', fontSize: 15}}>
          {'Num. tag'}
        </Text>

        <Text style={{...styles.cellData40, color: 'black', fontSize: 15}}>
          {'Activo'}
        </Text>

        <Text style={{...styles.cellData20, color: 'black', fontSize: 15}}>
          {' '}
          {'Estado'}{' '}
        </Text>

        <Text style={{...styles.cellData40, color: 'black', fontSize: 15}}>
          {' '}
          {'Detalles y observaciones'}
        </Text>
      </View>
      {dataActivos.map((activo, index) => (
        <View key={index} style={styles.rowTable}>
          <View style={styles.cellData20}>
            <Text>{activo.ID_TAG}</Text>
           {/*  <Text>hvgb-sdvsdv-sdvsv</Text> */}
          </View>
          <View style={styles.cellData40}>
            <Text>
              {`${activo.DENOMINACION}\n${activo.MARCA}\n${activo.MODELO}`}{' '}
            </Text>
          </View>
          <View style={styles.cellData20}>
            {activo.ENCONTRADO ? (
              <Text style={styles.encontrado}>Encontrado</Text>
            ) : (
              <Text style={styles.noEncontrado}>No encontrado</Text>
            )}
          </View>
          <View
            style={{
              ...styles.cellData40,
              ...{
                alignItems: 'center',
              },
            }}>
            <TouchableOpacity
              onPress={() => handleAgregarDetalle(activo)}
              style={styles.btn}>
              <Text style={styles.textbtn}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};
export default TableActivos;

const styles = StyleSheet.create({
  textbtn: {
    color: 'white',
    fontSize: 14,
  },
  encontrado: {
    padding: 1,
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 6,
  },
  noEncontrado: {
    padding: 1,

    color: 'white',
    backgroundColor: 'red',
    borderRadius: 6,
  },
  tableContainer: {
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: 'grey',

    borderWidth: 1,
    //width: '100%',
  },

  rowTable: {
    //borderBottom: '1px solid rgba(255,255,255,0.8)',
    //width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    /* borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20, */
  },
  cellData20: {
    width: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellData40: {
    width: '30%',
    justifyContent: 'center',
  },
  infoBar: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoGroupLeft: {
    padding: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
  },
  infoGroupRight: {
    padding: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '40%',
  },
  infoLabel: {},
  infoData: {
    color: 'black',
    fontSize: 13,
  },
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
    padding: 4,
    backgroundColor: 'rgba(255,255,255,0.94)',
  },
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: mainColor,
    borderRadius: 6,
    color: 'white',
    width: '80%',
    alignItems: 'center',
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
