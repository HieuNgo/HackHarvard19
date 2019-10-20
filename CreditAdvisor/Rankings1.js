import React, {Component} from 'react';
import { List, ListItem } from 'react-native-elements'
import CCFormScreen from './CCForm';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
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

class Rankings1Screen extends Component {
    render() {
      var creditcard_name = [
        {
          "name": "Discover it Cash Back",
          "gas": "5",
          "travel": "1",
          "grocery": "5",
          "online_shopping": "amazon_5 other_1",
          "dinning": "5",
          "others": "1"
        },
        {
          "name": "Bank of America® Cash Rewards credit card",
          "gas": "3",
          "travel": "3",
          "grocery": "2",
          "online_shopping": "1",
          "dinning": "3",
          "others": "1"
        },
        {
          "name": "Capital One QuicksilverOne Cash Rewards Credit Card",
          "gas": "1.50",
          "travel": "1.50",
          "grocery": "1.50",
          "online_shopping": "1.50",
          "dinning": "1.50",
          "others": "1.50"
        }
      ]

      var data = [
      {
        "name": "Discover it Cash Back",
        "gas": "5",
        "travel": "1",
        "grocery": "5",
        "online_shopping": "amazon_5 other_1",
        "dinning": "5",
        "others": "1"
      },
      {
        "name": "Capital One Quicksilver® Cash Rewards Credit Card",
        "gas": "1.50",
        "travel": "1.50",
        "grocery": "1.50",
        "online_shopping": "1.50",
        "dinning": "1.50",
        "others": "1.50"
      },
      {
        "name": "Chase Freedom Unlimited®",
        "gas": "1.50",
        "travel": "1.50",
        "grocery": "1.50",
        "online_shopping": "1.50",
        "dinning": "1.50",
        "others": "1.50"
      },
      {
        "name": "Bank of America® Cash Rewards credit card",
        "gas": "3",
        "travel": "3",
        "grocery": "2",
        "online_shopping": "1",
        "dinning": "3",
        "others": "1"
      },
      {
        "name": "Capital One® SavorOne® Cash Rewards Credit Card",
        "gas": "1",
        "travel": "1",
        "grocery": "2",
        "online_shopping": "1",
        "dinning": "3",
        "others": "1"
      },
      {
        "name": "Blue Cash Preferred® American Express",
        "gas": "3",
        "travel": "3",
        "grocery": "6",
        "online_shopping": "1",
        "dinning": "1",
        "others": "1"
      },
      {
        "name": "U.S. Bank Cash+™ Visa Signature® Card",
        "gas": "2",
        "travel": "1",
        "grocery": "2",
        "online_shopping": "1",
        "dinning": "1",
        "others": "1"
      },
      {
        "name": "Costco Anywhere Visa® Card by Citi",
        "gas": "1",
        "travel": "3",
        "grocery": "1",
        "online_shopping": "1",
        "dinning": "1",
        "others": "1"
      },
      {
        "name": "Brex Corporate Card for Ecommerce",
        "gas": "0",
        "travel": "0",
        "grocery": "0",
        "online_shopping": "0",
        "dinning": "0",
        "others": "0"
      },
      {
        "name": "Discover it Business Card",
        "gas": "1.50",
        "travel": "1.50",
        "grocery": "1.50",
        "online_shopping": "1.50",
        "dinning": "1.50",
        "others": "1.50"
      },
      {
        "name": "Mastercard Black Card",
        "gas": "1.50",
        "travel": "2",
        "grocery": "1.50",
        "online_shopping": "1.50",
        "dinning": "1.50",
        "others": "1.50"
      },
      {
        "name": "NHL Discover it",
        "gas": "5",
        "travel": "1",
        "grocery": "5",
        "online_shopping": "amazon_5 other_1",
        "dinning": "5",
        "others": "1"
      },
      {
        "name": "Mastercard Titanium Card",
        "gas": "1",
        "travel": "2",
        "grocery": "1",
        "online_shopping": "1",
        "dinning": "1",
        "others": "1"
      },
      {
        "name": "Mastercard Gold Card",
        "gas": "2",
        "travel": "2",
        "grocery": "2",
        "online_shopping": "2",
        "dinning": "2",
        "others": "2"
      },
      {
        "name": "Capital One QuicksilverOne Cash Rewards Credit Card",
        "gas": "1.50",
        "travel": "1.50",
        "grocery": "1.50",
        "online_shopping": "1.50",
        "dinning": "1.50",
        "others": "1.50"
      },
      {
        "name": "Discover it chrome",
        "gas": "2",
        "travel": "2",
        "grocery": "2",
        "online_shopping": "1",
        "dinning": "2",
        "others": "1"
      },
      {
        "name": "Discover it Student Cash Back",
        "gas": "5",
        "travel": "1",
        "grocery": "5",
        "online_shopping": "amazon_5 other_1",
        "dinning": "5",
        "others": "1"
      },
      {
        "name": "Discover it Student chrome",
        "gas": "2",
        "travel": "1",
        "grocery": "1",
        "online_shopping": "1",
        "dinning": "2",
        "others": "1"
      },
      {
        "name": "Discover it Secured",
        "gas": "2",
        "travel": "1",
        "grocery": "1",
        "online_shopping": "1",
        "dinning": "2",
        "others": "1"
      }
    ]

    // var sorted = [
    //   {
    //     "name": "name0",
    //     "travel": "666"
    //   }
    // ]
    // var pivot = data[18].travel;
    // var i = 0;
    //
    // for(var j=0; j<= 17; j++)
    // {
    //   if(data[j].travel< pivot)
    //   {
    //     i++;
    //     var temp = data[i];
    //     data[i] = data[j];
    //     data[j] = temp;
    //   }
    // }
    // var temp2 = data[i+1];
    // data[i+1] = data[j];
    // data[j] = temp2;
    var sorted = false;
    while(!sorted)
    {
      sorted = true;
      for(var i=0; i < data.length - 1; i++)
      {
        if(data[i+1].gas < data[i].gas)
        {
            var temp = data[i+1];
            data[i+1] = data[i];
            data[i] = temp;
            sorted = false;
        }
      }
    }

    var newsorted = false;
    while(!newsorted)
    {
      newsorted = true;
      for(var i=0; i < creditcard_name.length - 1; i++)
      {
        if(creditcard_name[i+1].gas < creditcard_name[i].gas)
        {
            var temp = creditcard_name[i+1];
            creditcard_name[i+1] = creditcard_name[i];
            creditcard_name[i] = temp;
            newsorted = false;
        }
      }
    }

    // var least_index = 666;
    // var least = 666;
    // for(i=0; i<19; i++)
    // {
    //   //var list_name = data[i].name;
    //
    //   var grocery = data[i].travel;
    //
    //   for(var j=0; j<19; j++)
    //   {
    //     if(grocery < least)
    //     {
    //       least = travel;
    //       least_index = i;
    //     }
    //   }
    // }

  //  best_travel_cc = data[greatest_index].name;
    // var greatest = '69';
    // var great_int = Number(greatest)
    //
    // if(great_int < 59)
    // {
    //   var toPrint = 'works';
    // }
    // else {
    //   var toPrint = 'works like a charm';
    // }
    // var yoyo = data[1].name[2];

      return (
        <>
          <Text style={styles.title}>
            Best Credit Cards For Gas
          </Text>

          <View style={styles.container}>
            <FlatList
              data={[
                {key: data[18].name},
                {key: data[17].name},
                {key: data[16].name},
                {key: data[15].name},
                {key: data[14].name}
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />

          </View>

          <Text style={styles.body}>
            Your Credit Card
          </Text>
          <View style={styles.container}>
          <FlatList
            data={[
              {key: creditcard_name[2].name},
              {key: creditcard_name[1].name}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          </View>
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
    marginTop: 50,
    textAlign: "center",
    color: "cornflowerblue",
  },
  titleBackground: {
    backgroundColor: "white",
  },
  container: {
   marginLeft: 10,
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
  body: {
    textAlign: "center",
    color: "cornflowerblue",
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0
  },
  button: {
    marginTop: 70,
    marginBottom: 30,

  },
});

export default Rankings1Screen;
