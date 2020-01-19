import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import PillComponent from "./components/pill.component";
import PillProfile from "./components/pillProfile.component";
import Jumbotron from "./components/jumbotron.component";

import PillProfile from "./components/pillProfile.component";

import medInfo from "./data/medications.json";
import MediCounter from "./components/mediCounter.component";
import FeelingComponent from "./components/feeling.component";

//import PillOverlay from "./components/pilloverlay.component";
import Modal from "react-native-modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOverlay: false,
      pills: medInfo.medication, //this is an array
      isModalVisible: false,
      selectedPill: medInfo.medication[0].id
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <View
        style={this.state.setOverlay ? styles.placeOverlay : styles.container}
      >
        <Jumbotron name="Alex S." />
        <MediCounter count={20} />
        <View style={styles.pillsPreviewContainer}>
          <View style={styles.todayContainer}>
            <Text style={styles.todayText}>Today</Text>
          </View>
          {/* The below dynamically loads the medication array and makes pill components! */}
          {this.state.pills.map((item, key) => (
            <PillComponent
              name={item.given_name}
              description={item.formal_name}
              take={item.taken}
              numberOfPills={item.frequency}
              key={item.id}
              // onPress={() => {
              //   this.setState({ isModalVisible: true });
              // }}
            />
          ))}
        </View>

        {/* <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <View>
              <Image
                style={{ width: 500, height: 500, alignContent: "center" }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/img/tiny_logo.png"
                }}
              ></Image>
            </View>
            <Button title="Close" onPress={this.toggleModal} />
          </View>
        </Modal> */}
      </View>
    );
  }
}

{
  /* <PillComponent
          name={medInfo.medication[0].given_name}
          description={medInfo.medication[0].formal_name}
          numberOfPills={medInfo.medication[0].frequency}
          taken={medInfo.medication[0].taken}
          onPress={() => {
            this.setState({ setOverlay: true });
          }}
        /> */
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  placeOverlay: {
    backgroundColor: "#0000005F",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
    width: "100%",

    // backgroundColor: "yellow",

    height: "100%"
  },
  todayContainer: {
    width: 335,
    paddingVertical: 10
  },
  todayText: {
    fontWeight: "500",
    fontSize: 24,
    marginLeft: 25
  },
  pillsPreviewContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100
  }
});

export default App;
