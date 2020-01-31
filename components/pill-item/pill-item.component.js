import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import PillProfile from "../pillProfile/pillProfile.component";
import styles from "./pill-item.component.style";
import MyText from "../myText/myText.component";

class PillItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    const {
      name,
      description,
      frequency,
      treatment,
      effects,
      imageUrl
    } = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View style={styles.nameContainer}>
            <MyText style={styles.name}>{name}</MyText>
            <MyText style={styles.description}>{description}</MyText>
          </View>
          <View style={styles.numberContainer}>
            <MyText style={styles.number}>{frequency}</MyText>
            <MyText style={styles.text}> Capsules</MyText>
          </View>
        </TouchableOpacity>

        {/* Show the modal based on state */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#000000",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              opacity: 0.4
            }}
            activeOpacity={0.4}
            onPress={() => {
              this.setModalVisible(false);
            }}
          ></TouchableOpacity>

          <PillProfile {...this.props} setModalVisible={this.setModalVisible} />
        </Modal>
      </View>
    );
  }
}

export default PillItem;
