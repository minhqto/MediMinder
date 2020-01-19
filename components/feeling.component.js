import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TouchAction,
  Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class FeelingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: ""
    };
  }
  onPress = () => {
    alert("Submitted");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>How do you feel right now?</Text>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Group26.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Group27.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Group28.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Group29.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Group30.png")}
          />
        </View>
        <Text style={styles.text}>Check if you have any side effects</Text>

        <Picker
          selectedValue={this.state.feeling}
          style={styles.selection}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ feeling: itemValue })
          }
        >
          <Picker.Item itemPosition={1} label="Nausea" value="nausea" />
          <Picker.Item
            itemPosition={2}
            label="Trouble-sleeping"
            value="trouble-sleeping"
          />
          <Picker.Item
            itemPosition={3}
            label="Nervousness"
            value="nervousness"
          />
          <Picker.Item itemPosition={4} label="Tremors" value="tremors" />
          <Picker.Item
            itemPosition={5}
            label="Sexual problems"
            value="sexual-problems"
          />
          <Picker.Item itemPosition={6} label="Other" value="other" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={{ color: "white" }}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 400,
    paddingTop: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    backgroundColor: "white"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 15,
    fontWeight: "500"
  },
  selection: {
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 15,
    borderColor: "#567BFF",
    borderWidth: 1,
    color: "#567BFF"
  },
  button: {
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#567BFF",

    padding: 10
  }
});

export default FeelingComponent;
