import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {mainColor} from '../../globals/palette';

const Button = props => {
  const {type, onPress, label, children} = props;
  const handlePress = () => {
    onPress?.();
  };
  return (
    <TouchableOpacity
      style={type === 'primary' ? styles.btn : styles.btnSec}
      onPress={handlePress}>
      {children}
      <Text style={type === 'primary' ? styles.textbtn : styles.txtSec}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  btnSec: {
    margin: 2,
    backgroundColor: 'transparent',
    borderColor: mainColor,
    borderRadius: 6,
    borderWidth: 1,
    height: 35,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#86180e',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 35,
    flexDirection: 'row',
    padding: 4,
    borderRadius: 4,
    margin: 2,
  },
  textbtn: {
    color: 'white',
    padding: 4,
  },
  txtSec: {
    color: mainColor,
    padding: 4,
  },
});
