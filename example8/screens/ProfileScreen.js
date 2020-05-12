import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class ProfileScreeen extends Component {
    static navigationOptions = {
        title: 'Welcome ProfileScreen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Home"
                    onPress={() => navigate('Home', { name: 'home' })}
                />
            </View>
        );
    }
}