import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const EditIcon = props => {
  const {size, color, onPress} = props;
const handlePress=()=>{
  onPress?.();
}
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon name="edit" size={size || 20} color={color || 'white'} />
    </TouchableOpacity>
  );
};
export default EditIcon;
/* const styles = StyleSheet.create({
  container: {
    //height: '100%',
    margin: 100,
  },
});
 */
