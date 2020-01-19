import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthSession } from "expo";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 15,
    paddingHorizontal: 25,

    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.12,

    width: 335,
    height: 72,
    backgroundColor: "#fff"
  },
  nameContainer: {
    width: "70%"
  },
  name: {
    fontSize: 16,
    fontWeight: 500
  },
  description: {
    fontSize: 12,
    fontWeight: 300,
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
    fontSize: 24,
    color: "#567BFF",
    fontWeight: 600
  },
  capsules: {
    color: "#434343",
    fontSize: 13
  }
});

const PillComponent = ({ name, description, numberOfPills }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{numberOfPills}</Text>
        <Text style={styles.capsules}> Capsules</Text>
      </View>
    </View>
  );
};

export default PillComponent;
