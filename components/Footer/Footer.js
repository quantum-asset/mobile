import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import LogoutIcon from './LogoutIcon';
import UserIcon from './UserIcon';
import WarehouseIcon from './WarehouseIcon';
const Footer = props => {
  const {title, active = 0, handleChangeView, handleLogout} = props;
  const handlePressWarehouse = async () => {
    //Alert.alert('Titulo', 'Se presiono el almacen icon');
    //setActive(0);
    if (active !== 0) {
      handleChangeView?.(2, {});
    }
  };
  const handlePressUsuario = async () => {
    //Alert.alert('Titulo', 'Se presiono el usuario icon');
    //setActive(1);
    if (active !== 1) {
      handleChangeView?.(1, {});
    }
  };
  const handlePressLogout = async () => {
    Alert.alert('Cierre de sesión', 'Se ha cerrado la sesión');
    //setActive(2);
    handleLogout?.();
  };
  // const [active,setActive]=useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.iconList}>
        <WarehouseIcon
          size={40}
          active={0 === active}
          color="white"
          onPress={handlePressWarehouse}
          text={`Tomas de \nInventario`}
        />
        <UserIcon
          size={35}
          active={active === 1}
          color="white"
          onPress={handlePressUsuario}
          text={'Perfil'}
        />

        <LogoutIcon
          active={active === 2}
          size={40}
          color="white"
          onPress={handlePressLogout}
          text={`Cerrar \nSesión`}
        />
      </View>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
    //paddingLeft: 10,
    //paddingRight: 20,
    height: 80,
    backgroundColor: '#86180e',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
  },
  iconList: {
    with: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
