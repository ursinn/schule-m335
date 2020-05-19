import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNShake from 'react-native-shake';

import { sendEmail } from '../sendEmail';

class LoginScreen extends Component {
  componentWillMount() {
    /*
    RNShake.addEventListener('ShakeEvent', () => {
        sendEmail(
            'test@gmail.com',
            'Greeting!',
            'I think you are fucked up how many letters you get.'
        ).then(() => {
            console.log('Our email successful provided to device mail ');
        });
    });
    */
  }

  componentWillUnmount() {
    // RNShake.removeEventListener('ShakeEvent');
  }

  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#f77f00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
  }

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Dein Name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default LoginScreen;
