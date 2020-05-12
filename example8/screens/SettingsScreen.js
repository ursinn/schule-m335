import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Welcome SettingsScreen',
        headerStyle: {
            backgroundColor: '#f77f00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color='#d62828'
            />
        ),
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#EAE2B7'}}>
                <Button
                    title="Profile"
                    onPress={() => navigate('Profile', { name: 'Hans' })}
                    color='#fcbf49'
                />
            </View>
        );
    }
}