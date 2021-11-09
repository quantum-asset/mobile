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
import Login from '../components/Login/Login';
import {AuthController} from '../controller/AuthController';
const HomeViewLogin = props => {
  
  
  useEffect(() => {
    console.log('rendered Login Container');
  }, []);

  return (
    <View style={styles.body}>
      {/* <Text>LOGINNN</Text> */}
      <Image
        style={styles.imgBack}
        source={{
          uri: 'https://user-images.githubusercontent.com/43678736/135766091-1585f7a5-d5f0-4701-8acb-d179b166e0af.jpg',
        }}
        resizeMode="cover"
        blurRadius={4}
      />
      <Login {...props}/> 
    </View>
  );
};
export default HomeViewLogin;


const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  body: {
    //backgroundColor:"yellow",
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },

  imgBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
});
