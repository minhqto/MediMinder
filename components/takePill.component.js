import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import MakeFireWorks from "./fireworks.component";
import ConfettiCannon from "react-native-confetti-cannon";

class TakePills extends React.Component {
  //when you make an instance of the TakePills class component, the constructor
  //gives it all the properties from React.Component in super(props).
  //then this.state is a property that is user defined
  constructor(props) {
    super(props);
    this.state = {
      isShowWord: true,
      isShowBtn: true,
      wording: "Have you taken your pills today?",
      pillsTaken: false,
      isFireworks: false,
      btnSelected: false
    };
  }

  turnOffFireworks = () => {
    setTimeout(() => {
      this.setState({
        isFireworks: false
      });
    }, 3500);
  };

  render() {
    return (
      <View style={{ textAlign: "center" }}>
        {this.state.isShowWord ? <Text>{this.state.wording}</Text> : null}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: 200,
            margin: 30,
            justifyContent: "space-evenly"
          }}
        >
          {this.state.isShowBtn ? (
            <Button
              style={{ width: 100 }}
              title="Yes!"
              onPress={() => {
                this.setState({
                  wording: "Nicely done!",
                  isShowBtn: false,
                  pillsTaken: true,
                  isFireworks: true,
                  btnSelected: true
                });
                this.turnOffFireworks();
              }}
            ></Button>
          ) : null}
          {this.state.isShowBtn ? (
            <Button
              style={{ width: 100 }}
              title="Not yet!"
              onPress={() => {
                this.setState({
                  wording: "Please take your pills!",
                  isShowBtn: false,
                  btnSelected: true
                });
              }}
            ></Button>
          ) : null}
        </View>
        {this.state.isFireworks ? (
          <ConfettiCannon count={150} origin={{ x: -10, y: 0 }} />
        ) : null}
        {this.state.btnSelected ? (
          <Button
            title="Close"
            onPress={() => {
              this.setState({ isShowBtn: false }); //need to close modal
            }}
          ></Button>
        ) : null}
      </View>
    );
  }
}

export default TakePills;
