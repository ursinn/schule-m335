import React, { Component } from "react";
import { Button, Text, View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Welcome HomeScreen',
            headerStyle: {
                backgroundColor: '#f77f00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <Button
                    onPress={
                        navigation.getParam('increaseCount')
                    }
                    title="+1"
                    color='#d62828'
                />
            ),
        };
    };
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
        count: 0,
    }
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const { navigate } = this.props.navigation;
        const name = this.props.navigation.getParam('name', 'Luigi');
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#EAE2B7'}}>
                <Text>Home Screen Welcome {name}</Text>
                <Button
                    title="Go to Jane's details"
                    onPress={() => navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                        name: 'Jane'
                    })}
                    color='#fcbf49'
                />
            </View>
        );
    }
}