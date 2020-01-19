import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import medInfo from "../data/medications.json";

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
    return <Text>Test</Text>;
  }
}

export default PillOverlay;
