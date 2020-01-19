import React, { Component } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import medicationInfo from "../data/medications.json";

const PillProfile = ({
  name,
  description,
  imgUrl,
  treatment,
  frequency,
  effects
}) => {
  return (
    <View style={style.container}></View>

    // <View style={{ padding: 45 }}>
    //   {/* Sets modal animation/configuration */}
    //   <Modal
    //     animationType="fade"
    //     transparent={false}
    //     visible={this.state.modalVisible}
    //   >
    //     {/* Actual contents of Modal */}
    //     <View style={{ margin: 22 }}>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           justifyContent: "space-between",
    //           alignItems: "flex-start"
    //         }}
    //       >
    //         <TextInput
    //           placeholder="Pill Name"
    //           style={{
    //             width: "80%",
    //             borderBottomColor: "black",
    //             borderBottomWidth: 1
    //           }}
    //         />
    //         <Text> Adderall - Amphetamine (25mg) </Text>
    //         <Text> </Text>
    //         <Text> </Text>
    //         <Text> </Text>
    //       </View>
    //     </View>
    //     <Button
    //       title="Close"
    //       onPress={() => this.setModalVisible(!this.state.modalVisible)}
    //     />
    //   </Modal>
    //   <TouchableHighlight
    //     onPress={() => {
    //       this.setModalVisible(true);
    //     }}
    //   >
    //     <Text> Show Capsule Details </Text>
    //   </TouchableHighlight>
    // </View>
  );
};

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
  }
});

export default PillProfile;
