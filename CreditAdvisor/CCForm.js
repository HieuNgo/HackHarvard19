import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Button,
  Alert,
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

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


class CCFormScreen extends Component{
    handleInput() {
      console.log("Enter Input");
    }
    render() {
      return (
        <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style = {styles.titleBackground}>
          <Text style={styles.title}>Your Credit Cards</Text>
          </View>
          <View style={styles.body}>
            <FormLabel>Card Number</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>Card Owner</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>Expiration Date</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>CCV</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>Billing Address</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>State</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <FormLabel>Zip Code</FormLabel>
            <FormInput onChangeText={this.handleInput}/>
            <FormValidationMessage>Error message</FormValidationMessage>
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm Cards"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </ScrollView>
        </>
      );
    };
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  title: {
    fontSize: 40,
    marginTop: 100,
    textAlign: "center",
    color: "cornflowerblue",
  },
  titleBackground: {
    backgroundColor: "white",
  },
  body: {
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    marginTop: 70,
    marginBottom: 30,

  },
  Image: {
    marginTop: 15,
    marginBottom: 15,
  }
});

export default CCFormScreen;
