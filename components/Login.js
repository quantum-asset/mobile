import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
const Login = props => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const IniciarSesion = () => {
    if (usuario === '' || password === '') {
      Alert.alert(
        'Datos incompletos :(',
        'No se ingreso el usuario o contraseña',
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../static/logo-h-nb2.png')} style={styles.img} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.txtInput}>Ingrese su usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={txt => {
            setUsuario(txt);
          }}
          value={usuario}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.txtInput}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={txt => {
            setPassword(txt);
          }}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={IniciarSesion}>
        <Text style={styles.textbtn}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.89)',
    borderRadius: 10,
    width: '80%',
    height: '70%',
    alignItems:"center"
  },
  imageContainer: {
    width: '100%',
    height: '20%',
    //backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:40
  },
  img: {
    height: 70,
    width: 225,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    width: '100%',

  },
  btn: {
      marginTop:60,
    backgroundColor: '#86180e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 55,
    width: '80%',
    borderRadius: 4,
  },
  textbtn: {
    color: 'white',
    fontSize: 20,
  },
  txtInput: {
    alignSelf: 'flex-start',
    color: '#000',
    fontSize: 20,
    marginBottom:'2%'
  },
  inputGroup: {
    marginBottom: '5%',
    width: '80%',

    alignItems: 'center',
  },
});
