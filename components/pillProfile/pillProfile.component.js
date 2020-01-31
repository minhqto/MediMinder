import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";

import styles from "./pillProfile.component.style";
import MyText from "../myText/myText.component";

const PillProfile = ({
  name,
  description,
  imageUrl,
  treatment,
  frequency,
  effects,
  setModalVisible
}) => {
  return (
    <View style={styles.container}>
      <View>
        <MyText style={styles.name}>{name}</MyText>
        <MyText style={styles.description}>{description}</MyText>
      </View>

      <Image
        style={{ width: "100%", height: 120 }}
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

      <TouchableOpacity
        style={styles.button}
        title="Close"
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <Text style={styles.buttonText}>Close </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PillProfile;
