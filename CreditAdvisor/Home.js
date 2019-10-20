import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  ImageBackground,
  Text,
  StatusBar,
  Button,
  AppRegistry,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BackgroundImage from './SvgExample'



class HomeyScreen extends Component{
  //state object
  state = { toggle: false };

  render() {

    return (
      <>


      <ImageBackground source={require('./images/SlightOceanView.jpg')} style={{width: '100%', height: '100%'}}>

      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

        <View style = {styles.titleBackground}>
          <Text style={styles.title}>Credit Advisor</Text>
        </View>
        <View style={styles.body}>
          <AwesomeButtonRick
          style={styles.button}
          type="secondary"
          onPress={() => this.props.navigation.navigate('StartSaving')}>
          Start Saving          </AwesomeButtonRick>

          <AwesomeButtonRick
          style={styles.button}
          type="secondary"
          onPress={() => this.props.navigation.navigate('CreditCards')}>
          My Credit Card    </AwesomeButtonRick>

          <AwesomeButtonRick
          style={styles.button}
          type="secondary"
          onPress={() => this.props.navigation.navigate('Wallet')}>
          Pay                         </AwesomeButtonRick>

      </View>
      </ScrollView>
      </SafeAreaView>

      </ImageBackground>

      </>
    );
  };
}
const styles = StyleSheet.create({

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: "center",
    color: "white",
    resizeMode: 'cover',
  },
  titleBackground: {
    flex: 1,
    // backgroundColor: "#ffcccc",

  },
  body: {
    marginTop: 85,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'

  },
  button: {
    marginBottom: 60

  },

});

export default HomeyScreen;
