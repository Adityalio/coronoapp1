import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from '../components/config';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AppDrawerNavigator } from "../components/appdrawer";
import Vaccinescreen from '../screen/Vaccinescreen';
import StatisticsScreen from '../screen/newsscreen';
import OxgenTestScreen from '../screen/oxygentestscreen'
import Trackscreen from '../screen/trackingscreen';
import HomeScreen from "../screen/login"; 
import { AppTabNavigator } from '../components/apptabnavigator'
import { colorsDark } from 'react-native-elements/dist/config';

export default class WelcomeScreen extends Component {
  render(){
  return (
<View>
  <Text>Hello</Text>
</View>
  )
  }
}