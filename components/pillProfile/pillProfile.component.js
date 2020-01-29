import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

import styles from "./pillProfile.component.style";
import MyText from "../myText/myText.component";

const PillProfile = ({
  name,
  description,
  imageUrl,
  treatment,
  frequency,
  effects
}) => {
  return (
    <View style={styles.container}>
      <View>
        <MyText style={styles.name}>{name}</MyText>
        <MyText style={styles.description}>{description}</MyText>
      </View>

      <Image
        style={{ width: "100%", height: 150 }}
        source={require("../../assets/prozac_20mg.jpg")}
      />

      <MyText>
        <Text style={styles.title}>Treatment: </Text>
        {treatment}
      </MyText>

      <MyText>
        <Text style={styles.title}>Frequency: </Text>
        {frequency}
      </MyText>

      <MyText>
        <Text style={styles.title}>Possible side-effect: </Text>
        {effects}
      </MyText>
    </View>
  );
};

export default PillProfile;
