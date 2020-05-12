import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen.js";
import DetailsScreen from "./screens/DetailsScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  }
);

let DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
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