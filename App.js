import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PillComponent from "./components/pill.component";
import Jumbotron from "./components/jumbotron.component";
import PillProfile from "./components/pillProfile.component";
import MediCounter from "./components/mediCounter.component";

export default function App() {
  return (
    <View style={styles.container}>
      <Jumbotron name="Candice G." />
      <MediCounter count={20} />

      <View style={styles.pillsPreviewContainer}>
        <View style={styles.todayContainer}>
          <Text style={styles.todayText}>Today</Text>
        </View>

        <PillComponent
          name={"Green & White Pill"}
          description="Prozac - Fluoxetine(20mg) "
          numberOfPills={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
