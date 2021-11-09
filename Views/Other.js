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

export default class Other extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resourcePath: null,
    };
  }
  selectFileCamera = () => {
    var options = {
      title: 'Take photo',
      includeBase64:true,
      customButtons: [
        {
          name: 'customOptionKey',

          title: 'Choose file from Camera',
        },
      ],

      storageOptions: {
        skipBackup: true,

        path: 'images',
      },
    };
    //console.log("result:", options);
    console.log('ImagePicker:', ImagePicker);
    ImagePicker.launchCamera(options, res => {
        console.log('Response.assets = ', res.assets[0]);
        this.setState({
          resourcePath: res.assets[0].uri,
        });
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        let source = res;

      /*   this.setState({
          resourcePath: source,
        }); */
      }
    });
  };
  selectFile = () => {
    var options = {
      title: 'Select Image',
      includeBase64:true,
      customButtons: [
        {
          name: 'customOptionKey',

          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,

        path: 'images',
      },
    };
    //console.log("result:", options);
    console.log('ImagePicker:', ImagePicker);
    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', Object.keys(res));
      console.log('Response.assets = ', res.assets[0]);
      this.setState({
        resourcePath: res.assets[0].uri,
      });
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        let source = res;

      /*   this.setState({
          resourcePath: source,
        });*/
      } 
    });
  };

  render() {
    return (
      <View style={styles.container}>
        
          {this.state.resourcePath && <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath,
            }}
            style={styles.image}
          />
}
         {this.state.resourcePath &&  <Image
            source={{uri: this.state.resourcePath}}
            style={styles.image}

          />}

          {this.state.resourcePath && <Text >
            {this.state.resourcePath.toString()}
          </Text>}

          <TouchableOpacity onPress={this.selectFile} style={styles.button}>
            <Text >Select File</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectFileCamera} style={styles.button}>
            <Text >From Camera</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    image:{
        width: 100, height: 100
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
