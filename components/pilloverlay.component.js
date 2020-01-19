import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import medInfo from "../data/medications.json";
import Overlay from "react-native-modal-overlay";

class PillOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: medInfo.medication,
      modalVisible: false
    };
  }
  onClose = () => this.setState({ modalVisible: false });
  render() {
    const {
      name,
      description,
      numberOfPills,
      taken,
      img,
      treatment,
      sideEffects
    } = this.props;
    return (
      <Overlay
        visible={this.state.modalVisible}
        onClose={this.onClose}
        closeOnTouchOutside
      >
        <Text>Hello</Text>
      </Overlay>
    );
  }
}

export default PillOverlay;
