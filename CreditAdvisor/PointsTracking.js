import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
  TouchableOpacity
} from "react-native";
import BouncingPreloader from "react-native-bouncing-preloader";

import Points from './Points'
import WalletLoading from './WalletLoading'

const icons = [
  require('./CreditCardImages/Brex.jpg'),
  require('./CreditCardImages/BankOfAmerica.png'),
  require('./CreditCardImages/Capital-One-Savor-One-Cash-Back.png'),
  require('./CreditCardImages/Capital-One®-Venture®-Rewards-Credit-Card.png'),
  require('./CreditCardImages/Citi-costco-anywhere-visa-credit-card.jpg'),
  require('./CreditCardImages/discover-it-cashback-match-012518-1.png'),
];

export default class PointsTracking extends Component {
  constructor(props){
   super(props)
   this.state = {
    component : <WalletLoading />
   }
  }


  componentDidMount(){

       // Start counting when the page is loaded
       this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this.setState({ component: <Points /> })
       }, 100);
  }

  componentWillUnmount(){
       clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
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
