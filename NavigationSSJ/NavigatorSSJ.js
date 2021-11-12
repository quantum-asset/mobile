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
import HomeViewLogin from '../Views/HomeViewLogin';
import Other from '../Views/Other';
import PerfilView from '../Views/PerfilView';
import TomaInventarioMainView from '../Views/TomaInventarioMainView';
//import TomaInventarioMainView from '../Views/TomaInventarioMainView';

const NavigatorSSJ = props => {
  const {
    index,
    currentProps,
    handleChangeView,
    handleLogInOut,
    auth,
    usuario,
    hanleChangeUsuario,
  } = props;
  switch (index) {
    case 0:
      return <HomeViewLogin {...props} />;
    case 1:
      return <PerfilView {...props} />;
      case 2:
      return <TomaInventarioMainView {...props} />;
    default:
      return <HomeViewLogin {...props} />;
  }
};
export default NavigatorSSJ;
