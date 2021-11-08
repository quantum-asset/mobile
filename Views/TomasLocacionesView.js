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
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import SearchIcon from '../components/Form/SearchIcon';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import Title from '../components/Title/Title';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {TomaInventarioController} from '../controller/TomaInventarioController';
import CardTomaInventario from '../components/TomaInventario/CardTomaInventario';
import {Dimensions} from 'react-native';
const screenHeight = Dimensions.get('window').height;

const TomasLocacionesView = props => {
  const {handleChangeView, currentProps} = props;
  const {ADN} = currentProps;
  const [listOfTomaInv, setListOfTomaInv] = useState([]);
  const init = async () => {
    const {success, data, message} = await TomaInventarioController.list(7);
    console.log('data length', data.length);
    console.log('success', success);
    if (success) {
      setListOfTomaInv([...data, ...data, ...data, ...data]);
    } else {
      Alert.alert(
        'Error al recuperar la información de tomas de inventario',
        message,
      );
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <MainContainer>
      <Header title={'Tomas de inventario'} />
      <Body style={styles.body}>
        <Title title={'Por favor, elija una toma de inventario:'} />
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Buscar por locación"
            // onChangeText={handleChangeUser}
            //value={usuario}
          />
          <View style={styles.iconContainer}>
            <Icon name="search" size={30} color="white" />
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          <FlatList
            data={listOfTomaInv}
            renderItem={({POR_PROCESAR}) => (
              <CardTomaInventario ESTADO={POR_PROCESAR} />
            )}
          />
        </ScrollView>
      </Body>

      <Footer />
    </MainContainer>
  );
};
export default TomasLocacionesView;

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 20,
    height: screenHeight - 280,
  },
  text: {
    fontSize: 42,
  },
  list: {
    height: '100%',
  },
  body: {
    padding: 7,
  },
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    padding: '1%',
    height: '100%',
    with: '20%',
    backgroundColor: '#86180e',
  },
});
