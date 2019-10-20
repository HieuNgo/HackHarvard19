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
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {cc_name: ''};
    this.state = {ccn: ''};
    this.state = {exp_date: ''};
    this.state = {cvv_num: ''};

  }

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
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Credit Card Name"
        maxLength={20}
        onChangeText={(cc_name) => this.setState({cc_name})}
        value={this.state.cc_name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Card Number"
        maxLength={20}
        onChangeText={(ccn) => this.setState({ccn})}
        value={this.state.ccn}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Expriration Date"
        maxLength={20}
        onChangeText={(exp_date) => this.setState({exp_date})}
        value={this.state.exp_date}
      />
      <TextInput
        style={styles.textInput}
        placeholder="CCV"
        maxLength={20}
        onChangeText={(ccv_num) => this.setState({ccv_num})}
        value={this.state.ccv_num}
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



      <View style = {styles.titleBackground}>
      <Text style={styles.body}>
      {this.state.cc_name}
      </Text>
      </View>


      <View style={styles.button}>
        <Button title="Submit"
        onPress={() => this.props.navigation.navigate('CCForm')}
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
