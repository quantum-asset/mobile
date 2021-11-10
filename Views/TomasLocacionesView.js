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
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import SearchIcon from '../components/Form/SearchIcon';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import Title from '../components/Title/Title';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {TomaInventarioController} from '../controller/TomaInventarioController';
import CardTomaInventario from '../components/TomaInventario/CardTomaInventario';
import {Dimensions} from 'react-native';
import ListaTomasInventario from './Inventario/ListaTomaInventario';
import ListaLocacionesTomasInventario from './Inventario/ListaLocacionesTomaInventario';
import ListaActivoXLocaciones from './Inventario/ListaActivosXLocaciones';
import DetalleActivo from './Inventario/DetalleActivo';
const screenHeight = Dimensions.get('window').height;

const TomasLocacionesView = props => {
  const {handleChangeView, usuario} = props;
  const [listOfTomaInv, setListOfTomaInv] = useState([]);

  const init = async () => {
    const {success, data, message} = await TomaInventarioController.list(
      usuario?.ID_USUARIO || 7,
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
    setCurrLocacion(locacion);
    setLocacionesView(false);
    setActivosView(true);
  };

  //current activo

  const [currActivo, setCurrActivo] = useState(undefined);
  const [activoDetalleView, setActivoDetalleView] = useState(false);
  const handleCurrActivo = activo => {
    setCurrActivo(activo);
    setActivosView(false);
    setActivoDetalleView(true);
  };
  ////LOGOUTR
  const handleLogout = () => {
    handleChangeView?.(0);
  };


  useEffect(() => {
    init();
    return () => {
      setTomasInventario(true);
      setLocacionesView(false);
      setActivosView(false);
      setActivoDetalleView(false);
      setCurrTomaInv(undefined);
      setCurrActivo(undefined);
    };
  }, []);

  return (
    <MainContainer>
      {tomasInventarioView && (
        <ListaTomasInventario
          {...props}
          tomasInventario={listOfTomaInv}
          handleCurrentTomaInv={handleCurrentTomaInv}
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
        /> 
       /*  <Text>se abrio</Text> */
      )}

      {activosView && currLocacion && (
        <View>
          <Text> vista de activos por locacione </Text>
          <ListaActivoXLocaciones
            currTomaInv={currTomaInv}
            currLocacion={currLocacion}
            goBack={() => {
              setLocacionesView(false);
              setTomasInventarioView(true);
              setCurrLocacion(undefined);
            }}
            handleCurrActivo={handleCurrActivo}
          />
        </View>
      )}
      {activoDetalleView && currActivo && (
        <View>
          <Text> detalle de activo </Text>
          <DetalleActivo
            currActivo={currActivo}
            goBack={() => {
              setActivosView(true);
              setActivoDetalleView(false);
              setCurrActivo(undefined);
            }}
          />
        </View>
      )}

      <Footer
        active={0}
        handleChangeView={handleChangeView}
        handleLogout={handleLogout}
      />
    </MainContainer>
  );
};
export default TomasLocacionesView;

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
/*    <FlatList
                  data={listOfTomaInv}
                  renderItem={({POR_PROCESAR}) => (
                    <CardTomaInventario ESTADO={POR_PROCESAR} />
                  )}
                /> */
