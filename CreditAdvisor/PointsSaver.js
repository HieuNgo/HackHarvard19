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


const PointsSaverScreen: () => React$Node = () => {
    return (
      <>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Points Savers</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.button}>
            <Button
              title="Groups"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Following"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Physician Recommendation"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Your Physician"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Your Story"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
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
    marginTop: 30,
    marginBottom: 30,

  },
});

export default PointsSaverScreen;
