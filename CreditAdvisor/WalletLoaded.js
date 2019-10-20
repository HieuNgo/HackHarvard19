import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class WalletLoaded extends Component {
  constructor(props) {
  super(props);
  this.array = [{
    title: 'MCDonalds'
  },
  {
    title: 'Pay: $37.59'
  },
  {
    title: 'Cash Back: $2.13'
  }
  ],

    this.state = {
      arrayHolder: [],
      textInput_Holder: ''
    }
  }

  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] })
  }


  joinData = () => {
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {
  }

  render() {
    let category = ['Gas', 'Travel', 'Grocery', 'Online Shopping', 'Dining', 'OThers'];
    const images = [
      require('./CreditCardImages/discover-it-cashback-match-012518-1.png'),
      require('./CreditCardImages/Capital-One®-Venture®-Rewards-Credit-Card.png'),
      require('./CreditCardImages/BlueCashPreferredAmericanExpress.jpg'),
      require('./CreditCardImages/WellsFargoPropelAmericanExpress.jpg'),
      require('./CreditCardImages/NHL_00_Shield_Card.png'),
      require('./CreditCardImages/ChaseSapphirePrefferredCreditCard.jpg'),
      require('./CreditCardImages/BankOfAmerica.png'),
      require('./CreditCardImages/Capital-One-Savor-One-Cash-Back.png'),
      require('./CreditCardImages/ChaseSapphirePrefferredCreditCard.jpg'),
      require('./CreditCardImages/CapitalOneVentureOne.jpg'),
    ];
    let rewardsRate= [0.05, 10, 0.06, 0.05, 0.05, 2];
    let rewardsType= ['$','Miles', '$', '$', '$', 'Points'];
    let RandomNumber = Math.floor(Math.random() * 6) + 1 ;
    let RandomMoney = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)/100 ;
    let icon = require('./CreditCardImages/BankOfAmerica.png');
    let categ = category[0];
    let rewardTracker = 0;
    let type = '$';
    switch (RandomNumber) {
      case 1:
        icon = images[0];
        categ = category[0];
        rewardTracker = RandomMoney*rewardsRate[0];
        type = rewardsType[0];
        break;
      case 2:
        icon = images[1];
        categ = category[1];
        rewardTracker = RandomMoney*rewardsRate[1];
        type = rewardsType[1];
        break;
      case 3:
        icon = images[2];
        categ = category[2];
        rewardTracker = RandomMoney*rewardsRate[2];
        type = rewardsType[2];
        break;
      case 4:
        icon = images[0];
        categ = category[3];
        rewardTracker = RandomMoney*rewardsRate[3];
        type = rewardsType[3];
        break;
      case 5:
        icon = images[4];
        categ = category[4];
        rewardTracker = RandomMoney*rewardsRate[4];
        type = rewardsType[4];
        break;
      case 6:
        icon = images[5];
        categ = category[5];
        rewardTracker = RandomMoney*rewardsRate[5];
        type = rewardsType[5];
        break;
    };

    return (
      <>
      <View style={styles.Image}>
        <Image
          style={{width: 380, height: 220, flexWrap: 'wrap',}}
          source={icon}
        />
        <Button
          title="Transaction Details"
          onPress={() =>{}}
        />
      </View>
      <View>
          <Text style={styles.item}>Category: {categ}</Text>
          <Text style={styles.item}>Payment: ${RandomMoney}</Text>
          <Text style={styles.item}>Rewards: {type} {rewardTracker.toFixed(2)}</Text>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({

  // MainContainer: {
  //
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 1,
  //   margin: 2
  //
  // },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  // button: {
  //
  //   width: '90%',
  //   height: 40,
  //   padding: 10,
  //   backgroundColor: '#4CAF50',
  //   borderRadius: 8,
  //   marginTop: 10
  // },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  Image: {
    marginTop: 100,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,

  },
  images: {
    borderColor: '#f9f9f9',
  }

});
