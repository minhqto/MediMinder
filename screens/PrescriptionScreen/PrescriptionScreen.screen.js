import React, { Component } from "react";
import { Image, SafeAreaView } from "react-native";
import styles from "./PrescriptionScreen.style";
import MyText from "../../components/myText/myText.component";

// This will be dynamically fetched in the future
const imgUrl = require("../../assets/prescription-sample.png");

class PrescriptionScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyText style={styles.text}>Prescription</MyText>
        <Image style={styles.image} source={imgUrl} />
      </SafeAreaView>
    );
  }
}

export default PrescriptionScreen;
