import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class HomeyScreen extends Component{
  //state object
  state = { toggle: false };
  selectedDate = new Date();

  generateDates = (hours, minutes) => {
    const date = new Date();
    date.setHours(date.getHours() + hours);
    if (minutes != null) {
      date.setMinutes(minutes);
    }
    return date;
  };

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <View style={styles.button}>
              <Button
                title="Start Saving"
                onPress={() => this.props.navigation.navigate('StartSaving')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="My Credit Card"
                onPress={() => this.props.navigation.navigate('CreditCards')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Purchase History"
                onPress={() => this.props.navigation.navigate('PurchaseHistory')}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Learn More"
                onPress={() => this.props.navigation.navigate('LearnMore')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
      </>
    );
  };
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: 60,
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
    marginTop: 60,
    marginBottom: 30,

  },
});

export default HomeyScreen;
