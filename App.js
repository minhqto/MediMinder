import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import TakePills from "./components/takePill.component";

export default function App() {
  return (
    <View style={styles.container}>
      <TakePills />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
