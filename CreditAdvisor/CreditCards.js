import React from 'react';
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


const CreditCardsScreen: () => React$Node = () => {
    return (
      <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Your Credit Cards</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/CapitalOne.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/AmericanExpress.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/BankOfAmerica.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/citiBank.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/DeltaSkyMiles.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/Paypal.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/USAAVIsa.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/USBank.jpg')}
            />
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/VIbeCreditUnion.jpg')}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Add Cards"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
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
  Image: {
    marginTop: 15,
    marginBottom: 15,
  }
});

export default CreditCardsScreen;
