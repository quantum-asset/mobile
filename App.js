import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeViewLogin from './Views/HomeViewLogin';
import TomasLocacionesView from './Views/TomasLocacionesView';
import NavigatorSSJ from './NavigationSSJ/NavigatorSSJ';

const Stack = createNativeStackNavigator();

const App = props => {
  const [currentView, setCurrentView] = useState(1);
  const [currentProps, setCurrentProps] = useState({});
  const handleChangeView = (viewNumber, viewProps) => {
    setCurrentProps(viewProps);
    setCurrentView(viewNumber);
  };
  useEffect(() => {
    console.log('Rendered App.js');
  }, []);
  //////
  const [usuario, setUsuario] = useState('');
  const [auth, setAuth] = useState(false);
  const handleLogInOut = value => {
    setAuth(value);
  };
  const hanleChangeUsuario = usuario => {
    setUsuario(usuario);
  };
  return (
    <View>
      <NavigatorSSJ
        index={currentView}
        currentProps={currentProps}
        handleChangeView={handleChangeView}
        handleLogInOut={handleLogInOut}
        auth={auth}
        usuario={usuario}
        hanleChangeUsuario={hanleChangeUsuario}
      />
    </View>
  );
};
export default App;
