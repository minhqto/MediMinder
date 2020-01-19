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

import medicationInfo from "../data/medications.json";

const PillProfile = ({
  id,
  name,
  description,
  imgUrl,
  treatment,
  frequency,
  effects
}) => {
  let getImage = id => {
    if (id == 1) {
      return (
        <Image
          style={{ width: 300, height: 200 }}
          source={require("../assets/prozac_20mg.jpg")}
        />
      );
    }
    if (id == 2) {
      return (
        <Image
          style={{ width: 300, height: 200 }}
          source={require("../assets/adderall_25mg.jpg")}
        />
      );
    }
    if (id == 3) {
      return (
        <Image
          style={{ width: 300, height: 200 }}
          source={require("../assets/clozapine_25mg.jpg")}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 15 }}>{name}</Text>
        <Text style={{ textAlign: "center", color: "#434343", fontSize: 13 }}>
          {description}
        </Text>
      </View>
      {getImage(id)}
      <Text>
        <Text style={styles.title}>Treatment: </Text>
        {treatment}
      </Text>
      <Text>
        <Text style={styles.title}>Frequency: </Text>
        {frequency}
      </Text>
      <Text>
        <Text style={styles.title}>Possible side-effect: </Text>
        {effects.map((effect, id) => (
          <Text key={id}>{effect}, </Text>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 400,
    paddingTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "white"
  },
  title: {
    fontWeight: "500"
  }
});

export default PillProfile;
