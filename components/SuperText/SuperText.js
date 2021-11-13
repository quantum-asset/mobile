import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Body from '../../components/Body/Body';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import {TomaInventarioController} from '../../controller/TomaInventarioController';
import CardTomaInventario from '../../components/TomaInventario/CardTomaInventario';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {mainColor} from '../../globals/palette';
import GoBack from '../../components/GoBack/GoBack';
const screenHeight = Dimensions.get('window').height;

const SuperText = props => {
  const {text, type = 'h4', color} = props;

  return (
   
      <Text style={{...styles[`${type}`], color: color,flexShrink: 1 }}>{text}</Text>
   
  );
};
export default SuperText;

const styles = StyleSheet.create({
  container: {
   // with: '100%',
    //flexWrap: 'wrap',
  },
  h1: {fontSize: 25},
  h2: {fontSize: 23},
  h3: {fontSize: 21},
  h4: {fontSize: 19},
  h5: {fontSize: 17},
  h6: {fontSize: 15},
});
