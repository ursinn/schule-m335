import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome HomeScreen',
    };
    didFocusSubscription = this.props.navigation.addListener(
        'didFocus',
        payload => {
            console.debug('didFocus', payload);
            console.debug('state: ' + this.props.navigation.state.routeName
                + " " + this.props.navigation.state.key
                    // + " " + this.props.state.params.name
            );
        }
    );
    didBlurSubscription = this.props.navigation.addListener(
        'didBlur',
        payload => {
            console.debug('didBlur', payload);
        }
    );
    render() {
        const { navigate } = this.props.navigation;
        const name = this.props.navigation.getParam('name', 'Luigi');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen Welcome {name}</Text>
                <Button
                    title="Go to Jane's details"
                    onPress={() => navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        name: 'Jane'
                    })}
                />
            </View>
        );
    }
}