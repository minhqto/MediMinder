import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignContent: "center",
    marginTop: 190
  },
  streakStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    //lineHeight: 78,
    color: "#000000"
  },
  numStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 52,
    //lineHeight: 78,
    color: "#567BFF"
  },
  dayStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    //ineHeight: 78,
    color: "#000000"
  }
});

const MediCounter = ({ count, streak, days }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.streakStyle}>{streak}</Text>
      <Text style={styles.numStyle}>{count}</Text>
      <Text style={styles.dayStyle}>{days}</Text>
    </View>
  );
};

export default MediCounter;
