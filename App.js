import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

const App = props => {
  useEffect(()=>{
console.log("Rendered App.js");
  },[]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        /* height: '100%',
        width:"25%",
        flexDirection: 'row',
        alignItems: 'center', */
      }}>
      <View
        style={{
          backgroundColor: '#fff',
         // borderRadius: '10px',
          width: '80%',
          height: '80%',
        }}>
        <Text>ADN cargado Mea Carga!!!</Text>
        <Text>ADN cargado Mea Carga!!!</Text>
        <Text>ADN cargado Mea Carga!!!</Text>
      </View>
    </View>
  );
};
export default App;
