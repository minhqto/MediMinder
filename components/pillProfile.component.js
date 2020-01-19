import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Button,
  TouchableOpacity
} from "react-native";

import medicationInfo from "../data/medications.json";

class PillProfile extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ padding: 45 }}>
        {/* Sets modal animation/configuration */}

        {/* Actual contents of Modal */}
        <View style={{ margin: 22 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <Text style={{ color: "white" }}>
              Adderall - Amphetamine (25mg)
            </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
          </View>
        </View>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={{ color: "white" }}> Show Capsule Details </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default PillProfile;
