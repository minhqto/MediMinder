import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
export default StyleSheet.create({
  outerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",
    top: normalize(140),

    width: normalize(212),
    height: normalize(212),
    borderRadius: normalize(212 / 2),
    borderWidth: normalize(10),
    borderColor: "#FFF"
  },

  innerCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
    alignSelf: "center",

    width: normalize(136),
    height: normalize(136),
    borderRadius: normalize(136 / 2),
    backgroundColor: "#FFFFFF",
    paddingVertical: normalize(33)
  },

  streakStyle: {
    position: "relative",
    fontSize: normalize(12),
    color: "#232323"
  },

  numStyle: {
    position: "relative",
    color: "#567BFF",
    fontSize: normalize(52)
  },

  dayStyle: {
    position: "relative",
    fontSize: normalize(15),
    color: "#232323"
  }
});
