import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const LogoutIcon = props => {
  const {size, color, text, onPress} = props;

  const handlePress = async () => {
    onPress?.();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Icon name="logout" size={size || 20} color={color || 'white'} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default LogoutIcon;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'column',
    with: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
