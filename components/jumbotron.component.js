import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const jumbotronStyles = StyleSheet.create({
  jumboStyling: {
    position: "absolute",
    width: 375,
    height: 246,
    left: 0,
    top: 0,
    backgroundColor: "red"
  },
  textStyles: {
    position: "absolute",
    width: 274,
    height: 36,
    left: 55,
    top: 81,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF"
  }
});

const Jumbotron = ({ name }) => {
  return (
    <View>
      <View style={jumbotronStyles.jumboStyling}>
        <Text style={jumbotronStyles.textStyles}>{name}</Text>
      </View>
    </View>
  );
};

export default Jumbotron;
