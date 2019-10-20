import React, {Component} from 'react';
import {cardName} from './CreditCards.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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

class RankingsScreen extends Component {
  render() {
   // readFile = (function() {
   //   async (MyPath) => {
   //        try {
   //          const path =MyPath+ "/data.txt";
   //          const contents = await RNFS.readFile(path, "utf8");
   //          return("" + contents);
   //        } catch (e) {
   //          alert("" + e);
   //        }
   //      };
   // });
     // <Button title="AppFilesDir" onPress={() => this.readFile(RNFS.ExternalDirectoryPath)} />
     // <Button title="InternalStorageDir" onPress={() => this.readFile(RNFS.ExternalStorageDirectoryPath)} />

    return (
      <>
      <Text style={styles.body}>
        //{readFile}
        {cardName}
      </Text>
        </>
    );
  }
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
    marginTop: 120
  },
  button: {
    marginTop: 70,
    marginBottom: 30,

  },
});

export default RankingsScreen;
