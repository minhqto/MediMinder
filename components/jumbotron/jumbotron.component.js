import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import MyText from "../myText/myText.component";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./jumbotron.component.style";
import normalize from "react-native-normalize";
import MediIcon from "../../assets/icons/medi-icon.svg";

const Jumbotron = ({ name }) => (
  <LinearGradient colors={["#5F9FFF", "#567BFF"]} style={styles.gradient}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",

        height: 0
      }}
    >
      <TouchableOpacity
        style={{ width: normalize(80), height: normalize(80) }}
        onPress={() => Alert.alert("Ouchh!!")}
      >
        <MediIcon width={normalize(80)} height={normalize(80)} />
      </TouchableOpacity>
    </View>
    <Text style={styles.text}>
      <MyText style={styles.greeting}>Hello ,</MyText>
      <MyText style={styles.name}>{name}</MyText>
    </Text>
  </LinearGradient>
);

export default Jumbotron;
