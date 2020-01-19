import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import TakePills from "./components/takePill.component";
import Jumbotron from "./components/jumbotron.component";
export default function App() {
  return (
    <View>
      <Jumbotron name="hello" />
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
