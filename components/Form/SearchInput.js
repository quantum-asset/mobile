import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {mainColor} from '../../globals/palette';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const SearchInput = props => {
  const {disabled, placeholder, handleChangeText} = props;
  return (
    <View style={styles.inputGroup}>
      <TextInput
        disabled={disabled}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChangeText}
      />
      <View style={styles.iconContainer}>
        <Icon name="search" size={30} color="white" />
      </View>
    </View>
  );
};
export default SearchInput;

const styles = StyleSheet.create({
  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  input: {
    borderWidth: 1,
    height: 40,
    borderColor: 'grey',
    borderRadius: 4,
    padding: 8,
    fontSize: 18,
    backgroundColor: 'white',
    width: '84%',
  },
  iconContainer: {
    alignItems: 'center',
    padding: '1%',
    height: '100%',
    with: '20%',
    backgroundColor: mainColor,
  },
});
