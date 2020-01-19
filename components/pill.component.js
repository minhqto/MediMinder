import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

import Modal from "react-native-modal";
import PillProfile from "./pillProfile.component";
import FeelingComponent from "./feeling.component";
//import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 15,
    paddingHorizontal: 25,

    borderRadius: 10,

    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },

    width: 335,
    height: 72,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  nameContainer: {
    width: "70%"
  },
  name: {
    fontSize: 16
  },
  description: {
    fontSize: 12,

    color: "#434343"
  },
  numberContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  number: {
    fontSize: 24,
    color: "#567BFF"
  },
  capsules: {
    // color: "#434343",
    fontWeight: "500",
    color: "#567BFF",
    fontSize: 15
  },
  taken: {
    fontSize: 12,

    color: "#434343"
  },
  shadowView: {
    backgroundColor: "#FFFFFF50",
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

class PillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOverlay: false,
      isModalVisible: false
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const {
      id,
      name,
      description,
      numberOfPills,
      taken,
      imgUrl,
      treatment,
      frequency,
      effects
    } = this.props;
    if (this.state.isModalVisible) {
      return (
        <Modal isVisible={this.state.isModalVisible}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              borderRadius: 15,
              backgroundColor: "#567BFF",
              width: 70,
              alignSelf: "center",
              padding: 10
            }}
            title="Close"
            onPress={this.toggleModal}
          >
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
          <PillProfile
            id={id}
            name={name}
            description={description}
            imgUrl={imgUrl}
            treatment={treatment}
            frequency={frequency}
            effects={effects}
          />
        </Modal>
      );
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.setState({ isModalVisible: true });
        }}
      >
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.capsules}>{numberOfPills}</Text>
          <Text style={styles.taken}>Taken:{taken ? " Yes" : " No"}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default PillComponent;
