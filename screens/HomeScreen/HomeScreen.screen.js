import React, { Component } from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Jumbotron from "../../components/jumbotron/jumbotron.component";
import CircularCounter from "../../components/circularCounter/circularCounter.component";
import PillPreview from "../../components/pillPreview/pillPreview.component";

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <View style={{ height: 360 }}>
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
  }
});

export default HomeScreen;
