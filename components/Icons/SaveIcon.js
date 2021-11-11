import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const SaveIcon = props => {
  const {size, color, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress?.()}>
      <Icon name="save" size={size || 20} color={color || 'white'} />
    </TouchableOpacity>
  );
};
export default SaveIcon;