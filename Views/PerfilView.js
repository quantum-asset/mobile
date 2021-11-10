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

import * as ImagePicker from 'react-native-image-picker';
import EditIcon from '../components/Icons/Edit';
import CameraIcon from '../components/Icons/CameraIcon';
import {mainColor} from '../globals/palette';
const screenHeight = Dimensions.get('window').height;
const backgroundImage =
  'https://dev.page/_next/image?url=%2Fstatic%2Fpngs%2Fplaceholder-profile-cover-image.png&w=3840&q=75';
const options = {
  title: 'Select Image',
  includeBase64: true,
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose file from Custom Option',
    },
  ],
  saveToPhotos: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
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
  const [resourcePath, setResourcePath] = useState(null);
  const handleEditFoto = () => {
    console.log('ImagePicker:', ImagePicker);
    ImagePicker.launchImageLibrary(options, res => {
      if (res?.assets?.[0]) {
        console.log('Response = ', Object.keys(res));
        console.log('Response.assets = ', res.assets[0]);

        setResourcePath(res.assets[0].uri);

        const base = res.assets[0].base64;
        console.log('size', base.length);
        console.log('base', base.slice(0, 40));
      }
    });
  };

  const handleEditCamera = () => {
    ImagePicker.launchCamera(options, res => {
      //console.log('Response.assets = ', res.assets[0]);
      if (res?.assets?.[0]) {
        console.log('Response = ', Object.keys(res));
        console.log('Response.assets = ', res.assets[0]);
        setResourcePath(res.assets[0].uri);

        const base = res.assets[0].base64;
        console.log('size', base.length);
        console.log('base', base.slice(0, 40));
      }
    });
  };

  return (
    <MainContainer>
      <Header title={'Perfil de usuario'} />
      <Body style={styles.body}>
        <Image
          style={styles.imgBack}
          source={{
            uri: backgroundImage,
          }}
          resizeMode="cover"
          blurRadius={1}
        />
        {/* <ScrollView style={styles.scrollView}></ScrollView> */}
        <View style={styles.perfilContainer}>
          <Text style={styles.txtLabel}>Foto: </Text>
          <View style={styles.imgContainer}>
            {resourcePath ? (
              <View>
                <Image source={{uri: resourcePath}} style={styles.img} />
              </View>
            ) : (
              <Image
                source={{
                  uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png',
                }}
                style={styles.img}
              />
            )}

            <View style={styles.editPhotoButtons}>
              <Text style={styles.editButton}>
                <EditIcon onPress={handleEditFoto} color={mainColor} /> Desde
                galeria
              </Text>

              <Text style={styles.editButton}>
                <CameraIcon onPress={handleEditCamera} color={mainColor} />{' '}
                Tomar foto
              </Text>
            </View>
          </View>

          {/**dtaaaa */}
          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Nombres: </Text>
            <Text style={styles.txtValue}>{NOMBRES || '-'}</Text>
          </View>

          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Primer Apellido: </Text>
            <Text style={styles.txtValue}>{PRIMER_APELLIDO || '-'}</Text>
          </View>

          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Segundo Apellido: </Text>
            <Text style={styles.txtValue}>{SEGUNDO_APELLIDO || '-'}</Text>
          </View>

          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Correo: </Text>
            <Text style={styles.txtValue}>{CORREO || '-'}</Text>
          </View>
          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Tipo documento: </Text>
            <Text style={styles.txtValue}>
              {TIPO_DOCUMENTO_IDENTIDAD || '-'}
            </Text>
          </View>
          <View style={styles.rowLabel}>
            <Text style={styles.txtLabel}>Nro documento: </Text>
            <Text style={styles.txtValue}>
              {NUM_DOCUMENTO_IDENTIDAD || '-'}
            </Text>
          </View>
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
  rowLabel: {
    flexDirection: 'row',
    marginVertical:4,
    alignItems: 'center',
  },
  txtValue: {
    color: 'black',
    fontSize: 15,
  },
  txtLabel: {
    fontSize: 14,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  editPhotoButtons: {
    flexDirection: 'column',
  },
  editButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
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
    backgroundColor: 'rgba(255,255,255,0.9)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 6,
    elevation: 5,
    padding: 40,
  },
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 6,
  },
  text: {
    fontSize: 42,
  },
  list: {
    height: '100%',
  },
  body: {
    position: 'relative',
    //  padding: 7,
  },
  imgBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
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
