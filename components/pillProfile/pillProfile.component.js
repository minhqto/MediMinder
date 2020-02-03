import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import normalize from "react-native-normalize";
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
        style={{ width: "100%", height: normalize(120) }}
        source={require("../../assets/prozac_20mg.jpg")}
      />

      <View>
        <MyText style={styles.title}>Treatment: </MyText>
        <MyText>{treatment}</MyText>
      </View>

      <View>
        <MyText style={styles.title}>Frequency: </MyText>
        <MyText>{frequency}</MyText>
      </View>

      <View>
        <MyText style={styles.title}>Possible side-effect: </MyText>
        <MyText>{effects}</MyText>
      </View>

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
