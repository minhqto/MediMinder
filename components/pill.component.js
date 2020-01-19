import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { AuthSession } from "expo";
//import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 15,
    paddingHorizontal: 25,

    borderRadius: 10,

    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },

    width: "100%",
    height: 72,
    backgroundColor: "#fff"
  },
  nameContainer: {
    width: "70%"
  },
  name: {
    fontSize: 16
  },
  description: {
    fontSize: 12,

    color: "#434343"
  },
  numberContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "baseline"
  },
  number: {
    fontSize: 24,
    color: "#567BFF"
  },
  capsules: {
    color: "#434343",
    fontSize: 13
  },
  shadowView: {
    backgroundColor: "#FFFFFF50",
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

class PillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOverlay: false
    };
  }
  render() {
    const { name, description, numberOfPills, taken } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.capsules}>{numberOfPills}</Text>
          <Text>Taken:{taken ? " Yes" : " No"}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PillComponent;
