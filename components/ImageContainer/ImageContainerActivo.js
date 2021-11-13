import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import { mainColor } from '../../globals/palette';

import CameraIcon from '../Icons/CameraIcon';
import EditIcon from '../Icons/Edit';
const screenHeight = Dimensions.get('window').height;

const defaultURI =
  'https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-File-Image-icon.png';
//URI ba link o base64
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
const ImageContainerActivo = props => {
  const {ID_ARCHIVO} = props;

  const init = ID_ARCHIVO => {
    //buscar la foto del usuario
    //archivoController.listByID
    /**
     const {success,data, message}= ArchivoController.getById({ID_ARCHIVO});
     
     if(success){
         //ARCHIVO EN BASE 64
     const {TIPO_ARCHIVO,ARCHIVO}=data;
        setImage(TIPO_ARCHIVO+ARCHIVO);
     }else{
      console.log("Image activo container",message);   
     }
     */
  };
  useEffect(() => {
    init(ID_ARCHIVO);
  }, [ID_ARCHIVO]);

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
   
     
      <View style={styles.imgContainer}>
        {resourcePath ? (
          <View>
            <Image source={{uri: resourcePath}} style={styles.img} />
          </View>
        ) : (
          <Image
            source={{
              uri: defaultURI,
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
            <CameraIcon onPress={handleEditCamera} color={mainColor} /> Tomar
            foto
          </Text>
        </View>
      </View>

     
  );
};
export default ImageContainerActivo;

const styles = StyleSheet.create({
 
  editPhotoButtons: {
    flexDirection: 'column',
  },
  editButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
 

  imgContainer: {
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 6,
  },
  
});
