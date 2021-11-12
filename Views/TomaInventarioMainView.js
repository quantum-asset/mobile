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
import Footer from '../components/Footer/Footer';
import MainContainer from '../components/MainContainer/MainContainer';
import {TomaInventarioController} from '../controller/TomaInventarioController';
import {Dimensions} from 'react-native';
import ListaTomasInventario from './Inventario/ListaTomaInventario';
import ListaLocacionesTomasInventario from './Inventario/ListaLocacionesTomaInventario';
import ListaActivoXLocaciones from './Inventario/ListaActivosXLocaciones';
import DetalleActivo from './Inventario/DetalleActivo';
const screenHeight = Dimensions.get('window').height;

const TomaInventarioMainView = props => {
  const {handleChangeView, usuario} = props;
  const [listOfTomaInv, setListOfTomaInv] = useState([]);

  const init = async () => {
    setListOfTomaInv([]);
    const {success, data, message} = await TomaInventarioController.list(
      usuario?.ID_USUARIO,
    );

    if (success) {
      //setListOfTomaInv([...data, ...data, ...data, ...data]);
      setListOfTomaInv(data);
    } else {
      Alert.alert(
        'Error al recuperar la información de tomas de inventario',
        message,
      );
    }
  };

  ////// componente activo   // /   VISTAS
  //vista de tomas de inventario
  const [tomasInventarioView, setTomasInventarioView] = useState(true);

  ///filter

  /// cuurrent toma de inventario
  const [currTomaInv, setCurrTomaInv] = useState(undefined);
  const [locacionesView, setLocacionesView] = useState(false);
  const handleCurrentTomaInv = newTomaInv => {
    if (newTomaInv) {
      console.log('handleCurrentTomaInv =>', newTomaInv);
      setCurrTomaInv(newTomaInv);
      setLocacionesView(true);

      setTomasInventarioView(false);
    }
  };
  //current locacion => lista de activos interna
  const [currLocacion, setCurrLocacion] = useState(undefined);
  const [activosView, setActivosView] = useState(false);
  const handleCurrLocacion = locacion => {
    console.log('handleCurrLocacion: ', locacion);
    setCurrLocacion(locacion);
    setLocacionesView(false);
    setActivosView(true);
  };

  //current activo

  const [currActivo, setCurrActivo] = useState(undefined);
  const [activoDetalleView, setActivoDetalleView] = useState(false);
  const handleCurrActivo = activo => {
    console.log('activo selected', activo);
    /* setCurrActivo(activo);
    setActivosView(false);
    setActivoDetalleView(true); */
  };
  ////LOGOUTR
  const handleLogout = () => {
    handleChangeView?.(0);
  };

  const [innerUpdate, setInnerUpdate] = useState(false);
  const handleUpdate = () => {
    setInnerUpdate(!innerUpdate);
  };
  useEffect(() => {
    console.log('Se llamo a inner update', innerUpdate);

    init();
   /*  return () => {
      //setTomasInventario(true);
      setLocacionesView(false);
      setActivosView(false);
      setActivoDetalleView(false);
      setCurrTomaInv(undefined);
      setCurrActivo(undefined);
    }; */
  }, [innerUpdate]);

  return (
    <MainContainer>
      {tomasInventarioView && (
        <ListaTomasInventario
          {...props}
          tomasInventario={listOfTomaInv}
          handleCurrentTomaInv={handleCurrentTomaInv}
          handleUpdate={handleUpdate}
        />
      )}

      {locacionesView && currTomaInv && (
        <ListaLocacionesTomasInventario
          {...props}
          goBack={() => {
            setLocacionesView(false);
            setTomasInventarioView(true);
            setCurrTomaInv(undefined);
          }}
          handleCurrLocacion={handleCurrLocacion}
          locaciones={currTomaInv.LOCACIONES}
          currTomaInv={currTomaInv}
          handleUpdate={handleUpdate}
        />
        /*  <Text>se abrio</Text> */
      )}

      {activosView && currLocacion && (
        <ListaActivoXLocaciones
          ID_LOCACION={currLocacion.ID_LOCACION}
          currTomaInv={currTomaInv}
          currLocacion={currLocacion}
          goBack={() => {
            setLocacionesView(false);
            setTomasInventarioView(true);
            setCurrLocacion(undefined);
          }}
          handleCurrActivo={handleCurrActivo}
          usuario={usuario}
          handleUpdate={handleUpdate}
        />
      )}
      {activoDetalleView && currActivo && (
        <DetalleActivo
          currActivo={currActivo}
          goBack={() => {
            setActivosView(true);
            setActivoDetalleView(false);
            setCurrActivo(undefined);
          }}
          handleUpdate={handleUpdate}
        />
      )}

      <Footer
        active={0}
        handleChangeView={handleChangeView}
        handleLogout={handleLogout}
      />
    </MainContainer>
  );
};
export default TomaInventarioMainView;
