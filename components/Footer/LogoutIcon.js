import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const LogoutIcon = props => {
  const {size, color, text, onPress, active} = props;

  const handlePress = async () => {
    onPress?.();
  };
  return (
    <TouchableOpacity
      style={active ? styles.containerActive : styles.container}
      onPress={handlePress}>
      <Icon
        name="logout"
        size={size || 20}
        color={active ? '#86180e' : 'white'}
      />
      <Text style={!active ? styles.text : styles.activeText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default LogoutIcon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 80,
    flexDirection: 'column',
    with: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerActive: {
    paddingHorizontal: 20,

    height: 80,
    flexDirection: 'column',
    with: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#86180e',
    backgroundColor: 'rgba(255,255,255,0.7)',
    //backgroundColor: '#86180e',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  activeText: {
    color: '#86180e',
  },
});
