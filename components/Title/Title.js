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

const Title = props => {
  const {title, subTitlle} = props;
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subTitlle && <Text style={styles.subTitlle}>{subTitlle}</Text>}
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  container: {
   
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
  subTitle: {
    fontSize: 10,
  },
});
