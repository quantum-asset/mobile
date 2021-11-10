import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const options = {
  title: 'Select Image',
  includeBase64: true,
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose file from Custom Option',
    },
  ],
  saveToPhotos: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Other extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resourcePath: null,
    };
  }
  selectFileCamera = () => {
    //console.log("result:", options);
    console.log('ImagePicker:', ImagePicker);
    ImagePicker.launchCamera(options, res => {
      //console.log('Response.assets = ', res.assets[0]);
      if (res?.assets?.[0]) {
        console.log('Response = ', Object.keys(res));
        console.log('Response.assets = ', res.assets[0]);
        this.setState({
          resourcePath: res.assets[0].uri,
        });
        const base = res.assets[0].base64;
        console.log('size', base.length);
        console.log('base', base.slice(0, 40));
      }
    });
  };
  selectFile = () => {
    console.log('ImagePicker:', ImagePicker);
    ImagePicker.launchImageLibrary(options, res => {
      if (res?.assets?.[0]) {
        console.log('Response = ', Object.keys(res));
        console.log('Response.assets = ', res.assets[0]);
        this.setState({
          resourcePath: res.assets[0].uri,
        });
        const base = res.assets[0].base64;
        console.log('size', base.length);
        console.log('base', base.slice(0, 40));
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.resourcePath && (
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath,
            }}
            style={styles.image}
          />
        )}
        {this.state.resourcePath && (
          <Image source={{uri: this.state.resourcePath}} style={styles.image} />
        )}

        {this.state.resourcePath && (
          <Text>{this.state.resourcePath.toString()}</Text>
        )}

        <TouchableOpacity onPress={this.selectFile} style={styles.button}>
          <Text>Select File</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.selectFileCamera} style={styles.button}>
          <Text>From Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    // flex: 1,

    padding: 30,
    //height:"100%",
    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#fff',
  },

  button: {
    width: 250,

    height: 60,

    backgroundColor: '#3740ff',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 4,

    marginBottom: 12,
  },

  buttonText: {
    textAlign: 'center',

    fontSize: 15,

    color: '#fff',
  },
});
