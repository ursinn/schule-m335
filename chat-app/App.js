import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'
import AboutScreen from './screens/AboutScreen'

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Chat: ChatScreen,
},
{
  initialRouteName: 'Login'
});

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

let DrawerNavigator = createDrawerNavigator({
  Home: HomeStack,
  About: AboutStack,
});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}