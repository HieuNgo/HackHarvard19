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
  TouchableOpacity
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
    return (
      <>
      <View style={styles.Image}>
        <Image
          style={{width: 380, height: 220, flexWrap: 'wrap',}}
          source={require('./images/CapitalOne.jpg')}
        />
        <Button
          title="Transaction Details"
          onPress={() =>{}}
        />
      </View>
      <View>
        <FlatList
          data={this.state.arrayHolder}
          width='100%'
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
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
  }

});
