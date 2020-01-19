import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
  outerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    top: 120,

    width: 200,
    height: 200,
    borderRadius: "100%",
    backgroundColor: "#567BFF",
    borderWidth: 10,
    borderColor: "#FFF"
  },
  innerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",

    width: 140,
    height: 140,
    borderRadius: "100%",
    backgroundColor: "#fff"
  },
  streakStyle: {
    position: "relative",
    width: 100,
    textAlign: "center",
    fontSize: 12,
    color: "#232323 "
  },
  numStyle: {
    position: "relative",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 50,
    color: "#567BFF"
  },
  dayStyle: {
    position: "relative",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    color: "#232323"
  }
});

const MediCounter = ({ count }) => {
  return (
    <LinearGradient colors={["#5F9FFF", "#567BFF"]} style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <Text style={styles.streakStyle}>medi streak</Text>
        <Text style={styles.numStyle}>{count}</Text>
        <Text style={styles.dayStyle}>Days</Text>
      </View>
    </LinearGradient>
  );
};

export default MediCounter;
