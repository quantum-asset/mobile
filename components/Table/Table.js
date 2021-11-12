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
import Button from '../Button/Button';

const screenHeight = Dimensions.get('window').height;

const TableActivos = props => {
  const {dataActivos = [], openDetalle, scanStart} = props;
  const handleAgregarDetalle = activo => {
    openDetalle?.(activo);
  };
  return (
    <View style={styles.tableContainer}>
      <View style={styles.rowTable}>
        <CellTable width="20%" alignItems="flex-start">
          <Text style={styles.txtHeader}>{'Num. tag'}</Text>
        </CellTable>

        <CellTable width="30%" alignItems="flex-start">
          <Text style={styles.txtHeader}>{'Activo'}</Text>
        </CellTable>
        <CellTable width="30%" alignItems="center">
          <Text style={styles.txtHeader}>{'Estado'}</Text>
        </CellTable>

        <CellTable width="20%" alignItems="center">
          <Text style={styles.txtHeader}>{'Detalles y observaciones'}</Text>
        </CellTable>
      </View>
      {dataActivos.map((activo, index) => (
        <View key={index} style={styles.rowTable}>
          <CellTable width="20%" alignItems="flex-start">
            <Text>{activo.CODIGO}</Text>
            {/*  <Text>hvgb-sdvsdv-sdvsv</Text> */}
          </CellTable>
          <CellTable width="30%" alignItems="flex-start">
            <Text>
              {`${activo.DENOMINACION}\n${activo.MARCA}\n${activo.MODELO}`}
            </Text>
          </CellTable>

          <CellTable width="30%">
            {activo.ENCONTRADO ? (
              <Text style={styles.encontrado}>Encontrado</Text>
            ) : (
              <Text style={styles.noEncontrado}>No encontrado</Text>
            )}
          </CellTable>

          <CellTable width="20%">
            <Button
              disabled={scanStart}
              onPress={() => handleAgregarDetalle(activo)}
              label="Agregar"
            />
          </CellTable>
        </View>
      ))}
    </View>
  );
};
export default TableActivos;
const CellTable = props => {
  const {data, width = '40%', alignItems = 'center', children} = props;
  return (
    <View
      style={{
        width: width,
        alignItems: alignItems,
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  txtHeader: {
    color: 'black',
    fontSize: 15,
  },
  textbtn: {
    color: 'white',
    fontSize: 14,
  },
  encontrado: {
    padding: 1,
    color: 'green',
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 13,
  },
  noEncontrado: {
    padding: 1,
    fontSize: 13,
    borderColor: 'red',
    borderWidth: 1,
    color: 'red',
    backgroundColor: 'white',
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
