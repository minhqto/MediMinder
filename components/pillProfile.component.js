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
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
        >
          {/* Actual contents of Modal */}
          <View style={{ margin: 22 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start"
              }}
            >
              <TextInput
                placeholder="Pill Name"
                style={{
                  width: "80%",
                  borderBottomColor: "black",
                  borderBottomWidth: 1
                }}
              />
              <Text> Adderall - Amphetamine (25mg) </Text>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>
            </View>
          </View>
          <Button
            title="Close"
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
          />
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text> Show Capsule Details </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default PillProfile;
