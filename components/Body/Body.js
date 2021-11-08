import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import {AuthController} from '../controller/AuthController';
const Body = props => {
  const {children, style = {}} = props;
  return <View style={{...styles.container, ...style}}>{children}</View>;
};
export default Body;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    minheight: screenHeight - 140,
  },
});
