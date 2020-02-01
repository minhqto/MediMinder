import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  gradient: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: normalize(246)
  },
  text: {
    marginTop: normalize(70),
    color: "#FFFFFF",
    fontSize: normalize(24)
  },
  greeting: {
    color: "#FFFFFF"
  },
  name: {
    fontWeight: "900"
  }
});
