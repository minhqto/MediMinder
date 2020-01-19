import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PillComponent from "./components/pill.component";

export default function App() {
  return (
    <View style={styles.container}>
      <PillComponent
        name={"Green & White Pill"}
        description="Prozac - Fluoxetine(20mg) "
        numberOfPills={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    height: "100%"
  }
});
