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

import StartSavingScreen from './StartSaving';
import HomeyScreen from './Home';
import SettingsScreen from './Settings';
import WalletScreen from './Wallet';
import PurchaseHistoryScreen from './PurchaseHistory';
import PointsSaverScreen from './PointsSaver';
import RankingScreen from './Ranking';
import CreditCardsScreen from './CreditCards';
import CCFormScreen from './CCForm';



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
const MainNavigator = createBottomTabNavigator({
  StartSaving: {screen: StartSavingScreen},
  Wallet: {screen: WalletScreen},
  Points: {screen: PointsSaverScreen},
  Settings: {screen: SettingsScreen},
  Ranking: {screen: RankingScreen},
  CreditCards: {screen: CreditCardsScreen},
  CCForm: {screen: CCFormScreen}

  Home: {screen: HomeyScreen},
  PurchaseHistory: {screen: PurchaseHistoryScreen},
});

const StackNavigator = createStackNavigator({
  StartSaving: {screen: StartSavingScreen},
  Wallet: {screen: WalletScreen},
  Points: {screen: PointsSaverScreen},
  Settings: {screen: SettingsScreen},
  Ranking: {screen: RankingScreen},
  CreditCards: {screen: CreditCardsScreen},
  CCForm: {screen: CCFormScreen}

  })

const App = createAppContainer(MainNavigator, StackNavigator);


export default App;
