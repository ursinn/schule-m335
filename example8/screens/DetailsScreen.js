import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
        const { navigate, push, goBack, popToTop } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details . . . again"
                    onPress={() => push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => goBack()}
                />
                <Button
                    title="Go to the first Screen on the Stack (Home)"
                    onPress={() => popToTop()}
                />
            </View>
        );
    }
}