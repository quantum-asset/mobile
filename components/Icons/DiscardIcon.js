import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const DiscardIcon = props => {
  const {size, color, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress?.()}>
      <Icon name="delete" size={size || 20} color={color || 'white'} />
    </TouchableOpacity>
  );
};
export default DiscardIcon;