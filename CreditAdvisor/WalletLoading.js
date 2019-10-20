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
  require('./CreditCardImages/Brex.jpg'),
  require('./CreditCardImages/BankOfAmerica.png'),
  require('./CreditCardImages/Capital-One-Savor-One-Cash-Back.png'),
  require('./CreditCardImages/Capital-One®-Venture®-Rewards-Credit-Card.png'),
  require('./CreditCardImages/Citi-costco-anywhere-visa-credit-card.jpg'),
  require('./CreditCardImages/discover-it-cashback-match-012518-1.png'),
];

export default class WalletLoading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BouncingPreloader
          icons={icons}
          leftDistance={-100}
          rightDistance={-150}
          speed={1000}
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
