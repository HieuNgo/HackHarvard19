import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
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

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const HomeyScreen: () => React$Node = () => {
    return (
      <>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.button}>
            <Button
              title="Start Saving"
              onPress={() => this.props.navigation.navigate('StartSaving')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="My Credit Cards"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Learn More"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
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
});

export default HomeyScreen;
