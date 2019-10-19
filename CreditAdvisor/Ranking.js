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


const RankingScreen: () => React$Node = () => {
    return (
      <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.button}>
            <Button
              title="Gas"
              onPress={() => this.props.navigation.navigate('StartSaving')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Travel"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Student"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Dining"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Hotel"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Faux Miles"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Miles"
              onPress={() => this.props.navigation.navigate('Ranking')}
            />
          </View>
        </View>
        </ScrollView>
        </>
    );
};
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
});

export default RankingScreen;
