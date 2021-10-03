import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
import Login from './components/Login';

const App = props => {
  useEffect(() => {
    console.log('Rendered App.js');
  }, []);
  return (
    <View>
      
      {/* <Header title="Bienvenido" /> */}
      <View style={styles.body}>
        <Image
        style={styles.imgBack}
        source={{uri: 'https://terpel.pe/web/images/terpel2-landing.png'}}
        resizeMode="cover"
        blurRadius={4}
      />
      <Login/>
      </View>
    </View>
  );
};
export default App;

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
    alignItems:"center",
    justifyContent:"center",
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
