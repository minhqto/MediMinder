import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PillComponent from "./components/pill.component";
import Jumbotron from "./components/jumbotron.component";
import PillProfile from "./components/pillProfile.component";

export default function App() {
  return (
    <View style={styles.container}>
      <Jumbotron name="Good morning, Candice G." />
      <PillComponent
        name={"Green & White Pill"}
        description="Prozac - Fluoxetine(20mg) "
        numberOfPills={3}
      />
      <PillProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    height: "100%"
  }
});
