import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const jumbotronStyles = StyleSheet.create({
  jumboStyling: {
    width: "100%",
    height: 210,
    left: 0,
    top: 0
  },
  textStyles: {
    //position: "absolute",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF",
    marginTop: 80
  }
});

const Jumbotron = ({ name }) => {
  return (
    <View>
      <LinearGradient
        colors={["#5F9FFF", "#567BFF"]}
        style={{ padding: 15, alignItems: "center" }}
      >
        <View style={jumbotronStyles.jumboStyling}>
          <Text style={jumbotronStyles.textStyles}>{name}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Jumbotron;
