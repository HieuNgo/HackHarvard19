/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CalendarScreen from './Calendar';
import SettingsScreen from './Settings';
import ReportScreen from './Report';
import AdviceScreen from './Advice';



const HomeScreen: () => React$Node = () => {
  return (
    <>
    </>
  );
};

const styles = StyleSheet.create({
});


const MainNavigator = createBottomTabNavigator({
  "Credit Card Choosing": {screen: CalendarScreen},
  Wallet: {screen: ReportScreen},
  Points: {screen: AdviceScreen},
  Settings: {screen: SettingsScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
