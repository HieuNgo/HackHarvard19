import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import BouncingPreloader from "react-native-bouncing-preloader";
import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const icons = [
  require('./CreditCardImages/Brex.jpg'),
  require('./CreditCardImages/BankOfAmerica.png'),
  require('./CreditCardImages/Capital-One-Savor-One-Cash-Back.png'),
  require('./CreditCardImages/Capital-One®-Venture®-Rewards-Credit-Card.png'),
  require('./CreditCardImages/Citi-costco-anywhere-visa-credit-card.jpg'),
  require('./CreditCardImages/discover-it-cashback-match-012518-1.png'),
];

export default class Points extends Component {
  render() {
    return (
      <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style = {styles.titleBackground}>
        <Text style={styles.title}>Your Credit Cards' Points</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./CreditCardImages/ChaseSapphirePrefferredCreditCard.jpg')}
            />
            <Text style={styles.text}>Cash Back: $33.23 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/AmericanExpress.jpg')}
            />
            <Text style={styles.text}>Cash Back: $54.12 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/BankOfAmerica.jpg')}
            />
            <Text style={styles.text}>Points: 2200 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/citiBank.jpg')}
            />
            <Text style={styles.text}>Miles: 120 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/DeltaSkyMiles.jpg')}
            />
            <Text style={styles.text}>Miles: 2200 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/Paypal.jpg')}
            />
            <Text style={styles.text}>Cashback: $22.40 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/USAAVIsa.jpg')}
            />
            <Text style={styles.text}>Points: 2200 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/USBank.jpg')}
            />
            <Text style={styles.text}>Points: 100 </Text>
          </View>
          <View style={styles.Image}>
            <Image
              style={{width: 350, height: 200}}
              source={require('./images/VIbeCreditUnion.jpg')}
            />
            <Text style={styles.text}>Miles: 200 </Text>
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
  }
}

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
    textAlign: 'right'
  }
});
