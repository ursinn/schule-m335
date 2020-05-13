import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat';

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
  }
}

export default ChatScreen;
