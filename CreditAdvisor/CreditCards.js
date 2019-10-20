import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Alert,
  Text,
  StatusBar,
  ImageBackground
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


export default class CreditCardsScreen extends Component{
  render() {
    return (
      <>

    <ImageBackground source={require('./images/SlightOceanView.jpg')} style={{width: '100%', height: '100%'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}> My Credit Cards</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/BankOfAmerica.png')}
            />
            <Text style={styles.text}>Cash Back: $33.23 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/Capital-One-Savor-One-Cash-Back.png')}
            />
            <Text style={styles.text}>Cash Back: $54.12 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/ChaseSapphirePrefferredCreditCard.jpg')}
            />
            <Text style={styles.text}>Points: 2200 (1X Points)</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/CapitalOneVentureOne.jpg')}
            />
            <Text style={styles.text}>Miles: 120 (1.25x Miles)</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/DiscoverItMiles.jpg')}
            />
            <Text style={styles.text}>Miles: 2200 (1.5x Miles)</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/Capital-One®-Venture®-Rewards-Credit-Card.png')}
            />
            <Text style={styles.text}>Cashback: $22.40 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/WellsFargoPropelAmericanExpress.jpg')}
            />
            <Text style={styles.text}>Points: 2200 (3X points)</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/CitiRewardsCard.jpg')}
            />
            <Text style={styles.text}>Points: 100 (2X points)</Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/VirginAtlanticWorldEliteMasterCard.jpg')}
            />
            <Text style={styles.text}>Miles: 200 (1.5x points)</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Add Cards"
            onPress={() => this.props.navigation.navigate('CCFormScreen')}
          />
        </View>
        </ScrollView>
        </ImageBackground>
        </>
    );
  };
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
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 30
  }
});
