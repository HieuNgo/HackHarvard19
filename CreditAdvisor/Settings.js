import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, {Component} from 'react';
import ToggleSwitch from 'toggle-switch-react-native'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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


class SettingsScreen extends Component{
  //state object
  state = { toggle: false };

  render() {
    return (
      <>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Settings</Text>
        </View>
        <View>
          <View style={styles.button}>
            <ToggleSwitch
              isOn={this.state.toggle}
              onColor="green"
              label="Notification"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({ toggle: isOn })}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Alarm"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Smarthome Link"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Darkmode"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Font Size"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Font Color"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Calendar Background Color"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Date Format"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Week Start"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>
        </>
    );
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "cornflowerblue",
  },
  titleBackground: {
    backgroundColor: "white",
  },
  button: {
      margin: 10,
  },
});

export default SettingsScreen;
