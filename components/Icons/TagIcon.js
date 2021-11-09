import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/Foundation';
const TagIcon = props => {
  const {size, color} = props;

  return (
    <View 
    //style={styles.container}
    >
      <Icon name="mobile-signal" size={size || 20} color={color || 'white'} />
    </View>
  );
};
export default TagIcon;
/* const styles = StyleSheet.create({
  container: {
    //height: '100%',
    margin: 100,
  },
});
 */