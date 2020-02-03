import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: vh(10),
    height: vh(80),
    width: normalize(320),
    paddingHorizontal: normalize(40),
    paddingVertical: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: "white"
  },

  name: {
    textAlign: "center",
    fontSize: normalize(15),
    color: "#567BFF",
    fontWeight: "bold"
  },

  description: {
    textAlign: "center",
    color: "#232323",
    fontSize: normalize(13)
  },

  title: {
    fontWeight: "bold"
  },

  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#567BFF",
    height: normalize(40),

    borderRadius: normalize(10)
  },

  buttonText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "bold"
  }
});
