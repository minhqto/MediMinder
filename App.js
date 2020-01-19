import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PillComponent from "./components/pill.component";
import Jumbotron from "./components/jumbotron.component";
import PillProfile from "./components/pillProfile.component";
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
    height: "100%"
  }
});

export default App;
