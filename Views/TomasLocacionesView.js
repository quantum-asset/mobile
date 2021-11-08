import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import SearchIcon from '../components/Form/SearchIcon';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import Title from '../components/Title/Title';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const TomasLocacionesView = props => {
  const {handleChangeView, currentProps} = props;
  const {ADN} = currentProps;
  return (
    <MainContainer>
      <Header title={'Tomas de inventario'} />
      <Body style={styles.body}>
        <Title title={'Por favor, elija una locacion:'} />
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Buscar locacion"
            // onChangeText={handleChangeUser}
            //value={usuario}
          />
          <View style={styles.iconContainer}>
            <Icon name="search" size={30} color="white" />
          </View>
        </View>
      </Body>
      <View></View>
      <Footer />
    </MainContainer>
  );
};
export default TomasLocacionesView;

const styles = StyleSheet.create({
  body: {
    padding: 7,
  },
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
  },

  input: {
    borderWidth: 1,
    height: 40,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    width: '80%',
  },
  iconContainer: {
      alignItems:"center",
    padding: '1%',
    height: '100%',
    with: '20%',
    backgroundColor: '#86180e',
  },
});
