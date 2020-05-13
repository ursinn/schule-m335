import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'
import AboutScreen from './screens/AboutScreen'

const DrawerNavigator = createDrawerNavigator({
  Login: LoginScreen,
  Chat: ChatScreen,
  About: AboutScreen,
});

const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}