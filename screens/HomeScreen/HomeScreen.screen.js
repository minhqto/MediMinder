import React, { Component } from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Jumbotron from "../../components/jumbotron/jumbotron.component";
import CircularCounter from "../../components/circularCounter/circularCounter.component";
import PillPreview from "../../components/pillPreview/pillPreview.component";

import normalize from "react-native-normalize";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.header}>
              <Jumbotron name="Viet" />
              <CircularCounter streak={30} />
            </View>

            <PillPreview />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white"
  },

  header: {
    height: normalize(360)
  }
});

export default HomeScreen;
