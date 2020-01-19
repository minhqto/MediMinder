import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

class MakeFireWorks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParticles: 50,
      emissionRate: 5,
      interval: 200,
      particleLife: 1500,
      direction: -90,
      spread: 360,
      fromPosition: { x: 200, y: 200 }
    };
  }
  render() {
    return (
      <View>
        <Emitter />;
      </View>
    );
  }
}

export default MakeFireWorks;
