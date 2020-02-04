import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./circularCounter.component.style";
import MyText from "../myText/myText.component";

const CircularCounter = ({ streak }) => {
  return (
    <LinearGradient
      locations={[0, 0.5, 1]}
      colors={["#567BFF", "#cce0ff", "#5F9FFF"]}
      style={styles.outerCircle}
    >
      <View style={styles["innerCircle"]}>
        <MyText style={styles["streakStyle"]}>medi streak</MyText>
        <MyText style={styles["numStyle"]}>{streak}</MyText>
        <MyText style={styles["dayStyle"]}>Days</MyText>
      </View>
    </LinearGradient>
  );
};

export default CircularCounter;
