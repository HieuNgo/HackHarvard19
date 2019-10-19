import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';


class WalletScreen extends Component{

    state = {       //Step 3
        expanded : 'none',
    };

  render () {
    return (
      <>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Wallet</Text>
        </View>
        <View>
          <View style={styles.button}>
            <Button
              title="Daily Report"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Weekly Report"
              onPress={() =>
                {
                  Alert.alert('Simple Button pressed')
                }
              }
            />
            <View style={{display: this.state.expanded}}>

              <Image
                  style={styles.buttonImage}
              ></Image>
            </View>
          </View>
          <View style={styles.button}>
            <Button
              title="Monthly Report"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Overview"
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
      margin: 30,
  },
  buttonImage: {},
});
export default WalletScreen;
