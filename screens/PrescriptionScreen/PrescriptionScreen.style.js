import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    height: "100%"
  },

  text: {
    fontWeight: "500",
    fontSize: normalize(24)
  },

  image: {
    width: "100%",
    height: normalize(500)
  }
});
