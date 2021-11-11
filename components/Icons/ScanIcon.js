import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/Entypo';
const ScanIcon = props => {
  const {size, color, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress?.()}>
      <Icon name="signal" size={size || 20} color={color || 'white'} />
    </TouchableOpacity>
  );
};
export default ScanIcon;