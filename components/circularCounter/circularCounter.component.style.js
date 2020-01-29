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
    backgroundColor: "#FFFFFF"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    width: normalize(81),
    height: normalize(90)
  },
  streakStyle: {
    position: "relative",
    width: normalize(82),
    fontSize: normalize(12),
    color: "#232323",
    marginTop: normalize(50)
  },
  numStyle: {
    position: "relative",
    fontWeight: "400",
    color: "#567BFF",
    fontSize: normalize(52),
    margin: normalize(-10)
  },
  dayStyle: {
    position: "relative",
    fontWeight: "normal",
    fontSize: normalize(15),
    color: "#232323"
  }
});
