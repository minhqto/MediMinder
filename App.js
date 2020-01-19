import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PillComponent from "./components/pill.component";
import Jumbotron from "./components/jumbotron.component";
import PillProfile from "./components/pillProfile.component";
<<<<<<< HEAD
import medInfo from "./data/medications.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOverlay: false
    };
  }
  render() {
    return (
      <View
        style={this.state.setOverlay ? styles.placeOverlay : styles.container}
      >
        <Jumbotron name="Good morning, Candice G." />
        <View style={styles.pillsPreviewContainer}>
        <View style={styles.todayContainer}>
          <Text style={styles.todayText}>Today</Text>
        </View>
        </View>
        <PillComponent
          name={medInfo.medication[0].given_name}
          description={medInfo.medication[0].formal_name}
          numberOfPills={medInfo.medication[0].frequency}
          taken={medInfo.medication[0].taken}
          onPress={() => {
            this.setState({ setOverlay: true });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  placeOverlay: {
    backgroundColor: "#0000005F",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
    width: "100%",

    // backgroundColor: "yellow",

    height: "100%"
  },
  todayContainer: {
    width: 335,
    paddingVertical: 10
  },
  todayText: {
    fontWeight: "500",
    fontSize: 24,
    marginLeft: 25
  },
  pillsPreviewContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100
  }
});

export default App;
