import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'
import AboutScreen from './screens/AboutScreen'

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
});

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

let DrawerNavigator = createDrawerNavigator(
  {
    Login: LoginStack,
    Chat: ChatStack,
    About: AboutStack,
  }
);

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}