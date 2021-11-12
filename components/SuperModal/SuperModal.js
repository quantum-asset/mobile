import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, View, Text} from 'react-native';

const SuperModal = props => {
  const {onClose, visible, children, title, actions} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Se hadescartado los cambios.');
        onClose?.();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.title}>
            <Text style={styles.txttitle}>{title}</Text>
          </View>
          <View style={styles.modalBody}>{children}</View>
          <View style={styles.modalActions}>{actions}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalActions: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.2)',
    marginTop: 6,
  },
  modalBody: {
    width: '100%',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    width: '100%',
    //maxWidth: '94%',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginBottom: 4,
  },
  txttitle: {
    color: 'black',
    fontSize: 18,
  },
  modalView: {
    flexDirection: 'column',
    width: '94%',
    //margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default SuperModal;
