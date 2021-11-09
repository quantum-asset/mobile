import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const WarehouseIcon = props => {
  const {size, color, text, onPress, active} = props;

  const handlePress = async () => {
    onPress?.();
  };
  return (
    <TouchableOpacity
      style={active ? styles.containerActive : styles.container}
      onPress={handlePress}>
      <Icon
        name="warehouse"
        size={size || 20}
        color={active ? '#86180e' : 'white'}
      />
      <Text style={!active ? styles.text : styles.activeText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default WarehouseIcon;

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal:100,
    paddingHorizontal:10,

    height: 80,
    flexDirection: 'column',
    with: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerActive: {
    paddingHorizontal:10,
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
