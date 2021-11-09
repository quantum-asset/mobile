import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
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
const screenHeight = Dimensions.get('window').height;

const PerfilView = props => {
  const {usuario, handleChangeView} = props;
  const {
    NOMBRES,
    PRIMER_APELLIDO,
    SEGUNDO_APELLIDO,
    CORREO,
    rol,
    ID_ARCHIVO,
    TIPO_DOCUMENTO_IDENTIDAD,
    NUM_DOCUMENTO_IDENTIDAD,
  } = usuario;

  const init = ID_ARCHIVO => {
    //buscar la foto del usuario
    //archivoController.listByID
  };
  useEffect(() => {
    init(ID_ARCHIVO);
  }, [ID_ARCHIVO]);
  ////LOGOUTR
  const handleLogout = () => {
    handleChangeView?.(0);
  };
  return (
    <MainContainer>
      <Header title={'Perfil de usuario'} />
      <Body style={styles.body}>
        {/* <ScrollView style={styles.scrollView}></ScrollView> */}
        <View style={styles.perfilContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png',
              }}
              style={styles.img}
            />
          </View>

          <Text>{NOMBRES || '-'}</Text>
          <Text>{PRIMER_APELLIDO || '-'}</Text>
          <Text>{SEGUNDO_APELLIDO || '-'}</Text>
          <Text>{CORREO || '-'}</Text>
          <Text>{rol?.[0]?.DENOMINACION || '-'}</Text>
          <Text>{TIPO_DOCUMENTO_IDENTIDAD || '-'}</Text>
          <Text>{NUM_DOCUMENTO_IDENTIDAD || '-'}</Text>
        </View>
      </Body>

      <Footer
        handleChangeView={handleChangeView}
        active={1}
        handleLogout={handleLogout}
      />
    </MainContainer>
  );
};
export default PerfilView;

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 5,
    height: screenHeight - 280,
  },
  perfilContainer: {
      //width:"100%",
    margin: 20,
    margin: 20,
    shadowColor: '#000',
    backgroundColor: 'rgba(255,255,255,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgContainer:{
    alignItems:"center",

  },
  img: {
    height: 120,
    width: 120,
  },
  text: {
    fontSize: 42,
  },
  list: {
    height: '100%',
  },
  body: {
    padding: 7,
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
