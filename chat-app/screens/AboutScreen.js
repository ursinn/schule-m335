import React, { Component } from "react";
import {
    View,
    Text,
} from 'react-native';

class LoginScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Name: {navigation.getParam('name', '')}</Text>
            </View>
        )
    };
}

export default LoginScreen;
