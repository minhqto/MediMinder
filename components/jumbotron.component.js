import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";

const jumbotronStyles = StyleSheet.create({
  jumboStyling: {
    width: "100%",
    height: 220
  },
  textStyles: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF",
    marginTop: 50
  }
});

const Jumbotron = ({ name }) => {
  return (
    <View>
      <Image
        style={{
          top: 30,

          zIndex: 1,
          position: "absolute",
          right: 350
        }}
        source={require("../assets/book-24px.svg")}
      ></Image>
      <Image
        style={{
          width: 50,
          top: 30,
          height: 300,
          zIndex: 1,
          position: "absolute",
          left: 350
        }}
        source={require("../assets/Group-17.png")}
      ></Image>
      <LinearGradient
        colors={["#5F9FFF", "#567BFF"]}
        style={{ padding: 15, alignItems: "center" }}
      >
        <View style={jumbotronStyles.jumboStyling}>
          <Text style={jumbotronStyles.textStyles}>
            Good morning,
            <Text style={{ fontWeight: "500" }}> {name}</Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Jumbotron;
