import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: "30%",
    height: normalize(468),
    width: normalize(320),
    paddingHorizontal: normalize(50),
    paddingVertical: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: "white"
  },

  name: {
    textAlign: "center",
    fontSize: normalize(15),
    color: "#567BFF"
  },

  description: {
    textAlign: "center",
    color: "#232323",
    fontSize: normalize(13)
  },

  title: {}
});
