import React, { Component } from "react";

import Svg,{
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop,
  AppRegistry,
  Image,
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

export default class SvgExample extends Component {
  // export default class BackgroundImage extends Component {
  render() {
  const resizeMode = 'center';
      return (
        <Image
          style={{

            flex: 1,

            // backgroundImage:"transparent"
            width: undefined,
            height: undefined


          }}
          source={require('./images/SlightOceanView.jpg')}
        />
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffddcc"
  },
});

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
