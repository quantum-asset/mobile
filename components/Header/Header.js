import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
//import logo from "../static/terpelino.png";
const Header = props => {
  const {title} = props;
  return (
    <View style={styles.header}>
      <View style={styles.logoTitle}>
        <Text style={styles.text}>{title}</Text>
        <Image source={require('../../static/logo-h-nb3.png')} style={styles.img} />
      </View>
    </View>
  );
};
export default Header;

Header.defaultProps = {
  title: 'Welcome',
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#86180e',
  },
  logoTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  img: {
    height: 30,
    width: 100,
  },
});
