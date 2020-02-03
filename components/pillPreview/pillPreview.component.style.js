import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: normalize(10)
  },
  leftActions: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: normalize(10),
    borderRadius: normalize(10),
    width: normalize(80),
    height: normalize(100),
    backgroundColor: "#38Be3c"
  },
  ActionsText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "600"
  },
  rightActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: normalize(10),
    marginVertical: normalize(10),
    borderRadius: normalize(10),

    width: normalize(90),
    height: normalize(100),
    backgroundColor: "red"
  }
});
