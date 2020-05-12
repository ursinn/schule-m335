import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Welcome SettingsScreen',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Profile"
                    onPress={() => navigate('Profile', { name: 'Hans' })}
                />
            </View>
        );
    }
}