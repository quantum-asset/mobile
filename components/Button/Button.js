import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {mainColor} from '../../globals/palette';

const Button = props => {
  const {
    type = 'primary',
    onPress,
    label = '',
    children,
    size = 35,
    font,
    disabled,
  } = props;
  const handlePress = () => {
    onPress?.();
  };
  const finalStyleBtn = () => {
    let styeFinal = {};
    if (type !== 'primary') {
      styeFinal = {...styles.btnSec, height: size};
    } else {
      styeFinal = {...styles.btn, height: size};
    }
    if (disabled) {
      styeFinal = {...styeFinal, backgroundColor: 'grey'};
    }
    return styeFinal;
  };
  const finalStyleTxt = () => {
    let styeFinal = {};
    if (type !== 'primary') {
      styeFinal = {...styles.txtSec, fontSize: font};
    } else {
      styeFinal = {...styles.textbtn, fontSize: font};
    }
    if (disabled) {
      styeFinal = {...styeFinal, backgroundColor: 'grey'};
    }
    return styeFinal;
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={finalStyleBtn()}
      onPress={handlePress}>
      {children}
      <Text style={finalStyleTxt()}>{label}</Text>
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
