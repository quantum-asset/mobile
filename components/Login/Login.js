import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AuthController} from '../../controller/AuthController';
const Login = props => {
  const {handleChangeView, currentProps} = props;
  const [usuario, setUsuario] = useState('griskyh@gmail.com');
  const [password, setPassword] = useState('');
  const IniciarSesion = async () => {
    if (usuario === '' || password === '') {
      Alert.alert(
        'Datos incompletos :(',
        'No se ingreso el usuario o contraseña',
      );
    } else {
      const {success, message, data} = await AuthController.login(
        usuario,
        password,
      );
      console.log('success: ', success);
      console.log('message: ', message);
      console.log('data: ', data);
      if (success) {
        Alert.alert('ADN cargado! Mega carga!!!');
        handleChangeView?.(1, {ADN: 'MEGA CARGAAAA'});
        //navigation.navigate('TomaInventario', {ADN: 'cargado'});
      } else {
        Alert.alert('NANIII');
      }
    }
  };
  const handleChangeUser = txt => {
    setUsuario(txt);
    console.log('usser', txt);
  };
  const handleChangePassword = txt => {
    setPassword(txt);
    console.log('psswrd', txt);
  };
  useEffect(() => {
    console.log('rendered Login');
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../static/logo-h-nb3.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.txtInput}>Ingrese su usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={handleChangeUser}
          value={usuario}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.txtInput}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={handleChangePassword}
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
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '20%',
    //backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
    marginTop: 60,
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
    marginBottom: '2%',
  },
  inputGroup: {
    marginBottom: '5%',
    width: '80%',

    alignItems: 'center',
  },
});
