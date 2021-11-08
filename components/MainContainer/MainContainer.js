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
const MainContainer = props => {
  const {children} = props;
  return <View style={styles.container}>{children}</View>;
};
export default MainContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexGrow: 1,
    height: screenHeight,
  },
});
