import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
//import logo from "../static/terpelino.png";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import LogoutIcon from './LogoutIcon';
import UserIcon from './UserIcon';
import WarehouseIcon from './WarehouseIcon';
const Footer = props => {
  const {title} = props;
  const handlePressWarehouse = async () => {
    Alert.alert('Titulo', 'Se presiono el almacen icon');
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconList}>
        <WarehouseIcon
          size={40}
          color="white"
          onPress={handlePressWarehouse}
          text={`Tomas de \nInventario`}
        />
        <UserIcon
          size={35}
          color="white"
          onPress={handlePressWarehouse}
          text={'Perfil'}
        />

        <LogoutIcon
          size={40}
          color="white"
          onPress={handlePressWarehouse}
          text={`Cerrar \nSesión`}
        />
      </View>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    height: 80,
    backgroundColor: '#86180e',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
  },
  iconList: {
    with: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
