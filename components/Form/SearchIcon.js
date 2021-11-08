import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/Ionicons';
const SearchIcon = props => {
  const {size, color, text, onPress} = props;

  const handlePress = async () => {
    onPress?.();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Icon name="search" size={size || 20} color={color || 'white'} />
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};
export default SearchIcon;

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
