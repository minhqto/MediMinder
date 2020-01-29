import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MyText from "../myText/myText.component";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./jumbotron.component.style";

const Jumbotron = ({ name }) => (
  <LinearGradient colors={["#5F9FFF", "#567BFF"]} style={styles.gradient}>
    <Text style={styles.text}>
      <MyText style={styles.greeting}>Hello ,</MyText>
      <MyText style={styles.name}>{name}</MyText>
    </Text>
  </LinearGradient>
);

export default Jumbotron;
