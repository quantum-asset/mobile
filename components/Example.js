import React, {useEffect} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

const App = props => {
  useEffect(() => {
    console.log('Rendered App.js');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#86180e',
        alignItems: 'center',
        justifyContent: 'center',
        
        /* height: '100%',
        width:"25%",
        flexDirection: 'row',
        alignItems: 'center', */
        
      }}>
      <View style={styles.loginContainer}>
        <Text style={styles.text}>ADN cargado Mega Carga!!!</Text>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.89)',
    borderRadius: 10,
    width: '80%',
    height: '80%',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  text: {
    color:'darkslateblue',
    fontSize: 30,
  },
});
