import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {mainColor} from '../../globals/palette';

const GoBack = props => {
  const {label = 'Regresar', onGoBack} = props;
  return (
    <View style={styles.goBackContainer}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => {
          onGoBack?.();
        }}>
        <Icon name="arrow-back" size={30} color={mainColor} />
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GoBack;

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
});
