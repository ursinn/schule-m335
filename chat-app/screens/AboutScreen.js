import React, { Component } from "react";
import { View, Text } from 'react-native';
import RNShake from 'react-native-shake';

import { sendEmail } from '../sendEmail';

class LoginScreen extends Component {
    componentWillMount() {
        RNShake.addEventListener('ShakeEvent', () => {
            console.log("OK")
            sendEmail(
                'test@gmail.com',
                'Greeting!',
                'I think you are fucked up how many letters you get.'
            ).then(() => {
                console.log('Our email successful provided to device mail ');
            });
        });
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'About Us',
            headerStyle: {
                backgroundColor: '#f77f00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Chat App</Text>
                <Text>Made for M335</Text>
                <Text>Libarys:</Text>
                <Text>React</Text>
                <Text>Firebase</Text>
                <Text>gifted-chat</Text>
                <Text>...</Text>
                <Text>Sourcecode Licensed under Unlicense</Text>
                <Text>Code: https://github.com/ursinn/Schule-M335</Text>
            </View>
        )
    };
}

export default LoginScreen;
