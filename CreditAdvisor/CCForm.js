import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Button,
  Alert,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class CCFormScreen extends React.Component {
  // handleInput() {
  //   console.log("Enter Input");
  // }
  state = { toggle: false };
  render() {
    return(
      <>
      <View style = {styles.titleBackground}>
      <Text style={styles.title}>Your Credit Cards</Text>
      </View>
      <View style={styles.body}>

      <TextInput
        style={styles.textInput}
        placeholder="Your name"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Card Number"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Expriration Date"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="CCV"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Billing Address"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="State"
        maxLength={20}
      />
      <TextInput
        style={styles.textInput}
        placeholder="ZIP"
        maxLength={20}
      />
      <View style={styles.button}>
        <Button title="Submit"

        />
      </View>

      </View>

      </>
      // <View style={styles.body}>
      //   <FormLabel>Card Number</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>Card Owner</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>Expiration Date</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>CCV</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>Billing Address</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>State</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      //   <FormLabel>Zip Code</FormLabel>
      //   <FormInput onChangeText={this.handleInput}/>
      //   <FormValidationMessage>Error message</FormValidationMessage>
      // </View>
      // <View style={styles.button}>
      //   <Button
      //     title="Confirm Cards"
      //     onPress={() => Alert.alert('Simple Button pressed')}
      //   />
      // </View>

)
  };
}
  //render() { return ();
      // <>
        // <View style = {styles.titleBackground}>
        // <Text style={styles.title}>Your Credit Cards</Text>
        // </View>
        // <View style={styles.body}>
        //   <FormLabel>Card Number</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>Card Owner</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>Expiration Date</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>CCV</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>Billing Address</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>State</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        //   <FormLabel>Zip Code</FormLabel>
        //   <FormInput onChangeText={this.handleInput}/>
        //   <FormValidationMessage>Error message</FormValidationMessage>
        // </View>
        // <View style={styles.button}>
        //   <Button
        //     title="Confirm Cards"
        //     onPress={() => Alert.alert('Simple Button pressed')}
        //   />
        // </View>
      // </>
    // );
  //}
//}

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
  },
  inputContainer: {
  paddingTop: 15
},
textInput: {
  borderColor: '#CCCCCC',
  borderTopWidth: 1,
  borderBottomWidth: 1,
  height: 50,
  fontSize: 25,
  paddingLeft: 20,
  paddingRight: 20
}
});

export default CCFormScreen;
