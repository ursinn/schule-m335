import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import { ShakeEventExpo } from '../ShakeEventExpo';
import { sendEmail } from '../sendEmail';
import Fire from '../Fire';

class ChatScreen extends Component {
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
    ShakeEventExpo.addListener(() => {
      sendEmail(
          'intuser.werbung@gmail.com',
          'Chat App Bug Report!',
          'Dud there is a Bug in Chat!'
      ).then(() => {
          console.log('Our email successful provided to device mail ');
      });
    });

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
    ShakeEventExpo.removeListener();
  }
}

export default ChatScreen;
