import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import RNShake from 'react-native-shake';

import { sendEmail } from '../sendEmail';
import Fire from '../Fire';

class ChatScreen extends Component {
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

  static navigationOptions = ({ navigation }) => {
    return {
        title: 'Global Chat',
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
    messages: [],
    isTyping: false,
  };

  get user() {
    return {
      name: this.props.navigation.getParam('name'),
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        isTyping={this.state.isTyping}
        renderUsernameOnMessage={true}
      />
    );
  }

  componentDidMount() {
    this.setState(previousState => ({
      messages: [
        {
          _id: 1,
          text: 'Hello User Thanks for Using',
          system: true,
        }
      ],
      isTyping: false,
    }))
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
    // RNShake.removeEventListener('ShakeEvent');
  }
}

export default ChatScreen;
