/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createAppContainer, StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, {Component} from 'react';
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

import StartSavingScreen from './StartSaving';
import HomeyScreen from './Home';
import WalletScreen from './Wallet';
import CreditCardsScreen from './CreditCards';
import CCFormScreen from './CCForm';
import SvgExample from './SvgExample';
import WalletLoaded from './WalletLoaded';
import WalletLoading from './WalletLoading';
import Rankings1Screen from './Rankings1';
import Rankings2Screen from './Rankings2';
import Rankings3Screen from './Rankings3';
import Rankings4Screen from './Rankings4';


const HomeScreen: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const stackNavigator = createStackNavigator({
  Home: {screen: HomeyScreen},
  StartSaving: {screen: StartSavingScreen},
  Wallet: {screen: WalletScreen},
  CreditCards: {screen: CreditCardsScreen},
  SvgExample: {screen: SvgExample}
  CCFormScreen: {screen: CCFormScreen},
  WalletLoaded: {screen: WalletLoaded},
  WalletLoading: {screen: WalletLoading},
  Rankings1: {screen: Rankings1Screen},
  Rankings2: {screen: Rankings2Screen},
  Rankings3: {screen: Rankings3Screen},
  Rankings4: {screen: Rankings4Screen},

  },
  {
    initialRouteName: 'Home',
  })

const AppContainer = createAppContainer(stackNavigator);


export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
