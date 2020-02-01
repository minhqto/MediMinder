import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10
  },
  leftActions: {
    flex: 1,
    marginVertical: normalize(10),
    borderRadius: normalize(10),
    paddingVertical: normalize(37),
    width: normalize(80),
    backgroundColor: "#38Be3c"
  },
  leftActionsText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontWeight: "600"
  }
});
