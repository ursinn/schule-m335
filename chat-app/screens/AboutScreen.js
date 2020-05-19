import React, { Component } from "react";
import { View, Text } from 'react-native';
import { ShakeEventExpo } from '../ShakeEventExpo';
import { sendEmail } from '../sendEmail';

class LoginScreen extends Component {
    componentWillUnmount() {
        ShakeEventExpo.removeListener();
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
        ShakeEventExpo.addListener(() => {
            sendEmail(
                'intuser.werbung@gmail.com',
                'Chat App Bug Report!',
                'Dud there is a Bug in About!'
            ).then(() => {
                console.log('Our email successful provided to device mail ');
            });
        });

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
