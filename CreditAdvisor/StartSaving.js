import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {withNavigation, createAppContainer} from 'react-navigation';

import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
  Button,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class StartSavingScreen extends Component{
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
          <Text style={styles.title}>Start Saving</Text>
        </View>

        <View style={styles.body}>

            <AwesomeButtonRick
            style={styles.button}
            type="secondary"
            onPress={() => this.props.navigation.navigate('Rankings1')}>
            Gas                         </AwesomeButtonRick>

            <AwesomeButtonRick
            style={styles.button}
            type="secondary"
            onPress={() => this.props.navigation.navigate('Rankings2')}>
            Grocery                   </AwesomeButtonRick>

            <AwesomeButtonRick
            style={styles.button}
            type="secondary"
            onPress={() => this.props.navigation.navigate('Rankings3')}>
            Travel                        </AwesomeButtonRick>

            <AwesomeButtonRick
            style={styles.button}
            type="secondary"
            onPress={() => this.props.navigation.navigate('Rankings4')}>
            Restaurant                  </AwesomeButtonRick>

          </View>

      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center'
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
  button: {
    margin: 30,
    marginTop: 60,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    // backgroundColor: '#4286f4',
  },
  title: {
    fontSize: 40,
    marginTop: 60,
    textAlign: "center",
    color: "white",
    fontWeight: 'bold',
  },
  titleBackground: {
    // backgroundColor: "white",
  },
});


export default StartSavingScreen;
