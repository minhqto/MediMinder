import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import FeelingComponent from "./feeling.component";

const jumbotronStyles = StyleSheet.create({
  jumboStyling: {
    width: "100%",
    height: 220
  },
  textStyles: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 36,
    color: "#FFFFFF",
    marginTop: 50
  },
  icon: {
    position: "absolute",
    marginLeft: 10,
    left: 0,
    width: 40,
    backgroundColor: "white"
  }
});

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOverlay: false,
      isModalVisible: false
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { name } = this.props;
    if (this.state.isModalVisible) {
      return (
        <Modal isVisible={this.state.isModalVisible}>
          <TouchableOpacity onPress={this.toggleModal}>
            <Text style={{ color: "white" }}>Close</Text>
            <FeelingComponent />
          </TouchableOpacity>
        </Modal>
      );
    }
    return (
      <View>
        <LinearGradient
          colors={["#5F9FFF", "#567BFF"]}
          style={{ padding: 15, alignItems: "center" }}
        >
          <View style={{ width: "100%" }}>
            <TouchableOpacity title="Close" onPress={this.toggleModal}>
              <Text style={{ color: "white", marginTop: 50 }}>Check Mood</Text>
            </TouchableOpacity>
          </View>

          <View style={jumbotronStyles.jumboStyling}>
            <Text style={jumbotronStyles.textStyles}>
              Good morning,
              <Text style={{ fontWeight: "500" }}> {name}</Text>
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default Jumbotron;
