import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const { navigate, push, goBack, popToTop } = navigation;
        const name = navigation.getParam('name', 'Peter');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen Welcome to {name}</Text>
                <Text>const name: {name}</Text>
                <Text>state.name: {navigation.state.params.name}</Text>
                <Text>getParam.name: {navigation.getParam('name', 'Lou')}</Text>
                <Text>getParam.otherParam: {navigation.getParam('otherParam', 'default')}</Text>
                <Text>json.otherParam: {JSON.stringify(otherParam)}</Text>
                <Text>itemId: {navigation.getParam('itemId', 'yeah')}</Text>
                <Button
                    title="Go to Details . . . again"
                    onPress={() => push('Details', {
                        name: 'guguseli',
                        otherParam: 'other',
                        itemId: Math.floor(Math.random() * 100)
                    })}
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