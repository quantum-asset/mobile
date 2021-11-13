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
import GoBack from '../../components/GoBack/GoBack';
import SuperText from '../../components/SuperText/SuperText';
import ImageContainerActivo from '../../components/ImageContainer/ImageContainerActivo';
const screenHeight = Dimensions.get('window').height;

const DetalleActivo = props => {
  const {currActivo, goBack, currLocacion} = props;
  console.log('currActivo', Object.keys(currActivo));
  //prevent go back con activos ya escaneados
  const preventDiscardChanges = () => {
    goBack?.();
  };
  return (
    <>
      <Header title={'Detalle de Activo'} />
      <Body style={styles.body}>
        <GoBack
          onGoBack={preventDiscardChanges}
          label="Regresar a Lista de activos"
        />

        <ScrollView style={styles.scrollView}>
          <SuperText
            type="h5"
            color="black"
            text={`Código RFID - ${currActivo.CODIGO}`}
          />

         

          <View style={styles.detailSeparator}>
            <View style={styles.detailGroupVertical}>
              <ImageContainerActivo />
            </View>
            <View style={styles.detailGroupVertical}>
             
              <SuperText
                type="h4"
                color="black"
                text={currActivo.DENOMINACION}
              />
              <SuperText
                type="h5"
                text={`${currActivo.MARCA} - ${currActivo.MODELO}`}
              />
              
              <SuperText type="h5" text={'Serie:'} />
              <SuperText type="h5" color="black" text={currActivo.SERIE} />
              <SuperText type="h5" text={'Color:'} />
              <SuperText type="h5" color="black" text={currActivo.COLOR} />
              <Text type="h4" color="black" text={currActivo.DENOMINACION}>
                {currActivo.DENOMINACION}
              </Text>
            </View>
          </View>
          <View style={styles.detailGroupVertical}>
            <SuperText type="h5" text={'Caracteristicas:'} />
            <ScrollView style={styles.scrollViewAux}>
              <SuperText
                type="h5"
                color="black"
                text={currActivo.CARACTERISTICAS}
              />
            </ScrollView>
            <SuperText type="h5" text={'Observaciones del activo:'} />
            <ScrollView style={styles.scrollViewAux}>
              <SuperText
                type="h5"
                color="black"
                text={currActivo.OBSERVCIONES}
              />
            </ScrollView>
          </View>
          <Text>{`detalle del activo ${currActivo.CODIGO}`}</Text>
        </ScrollView>
      </Body>
    </>
  );
};
export default DetalleActivo;

const styles = StyleSheet.create({
  detailSeparator: {
    //flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 5,
    with: '100%',
  },
  detailGroupVertical: {
    //flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 8,
    //maxwith: '50%',
  },
  imageSummaryContainer: {
    //flexDirection: 'row',
    //with: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  imgContainer: {
    //with: '40%',
  },
  summaryContainer: {
    //with: '60%',
  },
  scrollView: {
    //backgroundColor: 'pink',
    backgroundColor: 'rgba(255,255,255,0.8)',

    marginHorizontal: 5,
    height: screenHeight - 280,
  },
  scrollViewAux: {
    maxHeight: (screenHeight / 100) * 12,
  },
  body: {
    //padding: 7,
    with: '100%',
    backgroundColor: 'rgba(255,255,255,0.91)',
  },
});
