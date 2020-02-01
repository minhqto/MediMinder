import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 5,
    marginVertical: normalize(10),
    paddingVertical: normalize(25),
    paddingHorizontal: normalize(25),
    width: normalize(335),
    height: normalize(100),
    borderRadius: normalize(10),
    backgroundColor: "#FFFFFF",

    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { height: 0, width: 0 }
  },

  nameContainer: {
    width: "70%"
  },

  name: {
    fontSize: normalize(16)
  },

  description: {
    fontSize: normalize(12),
    color: "#434343"
  },

  numberContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "baseline"
  },

  number: {
    fontSize: normalize(30),
    color: "#567BFF"
  },

  text: {
    fontSize: normalize(12),
    color: "#434343"
  }
});
