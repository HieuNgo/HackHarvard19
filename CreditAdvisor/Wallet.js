import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import BouncingPreloader from "react-native-bouncing-preloader";

const icons = [
  require('./images/AmericanExpress.jpg'),
  require('./images/BankOfAmerica.jpg'),
  require('./images/citiBank.jpg'),
  require('./images/Paypal.jpg'),
  require('./images/USBank.jpg'),
  require('./images/VIbeCreditUnion.jpg'),
];

export default class Wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BouncingPreloader
          icons={icons}
          leftDistance={-100}
          rightDistance={-150}
          speed={1000}
          onLoad={ () =>    {
            setTimeout(function(){
            //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
            Alert.alert("Alert Shows After 5 Seconds of Delay.")
          }, 2000);}
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
