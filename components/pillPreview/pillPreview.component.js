import React, { Component } from "react";
import { FlatList, View, SafeAreaView, Animated } from "react-native";

import PillItem from "../pill-item/pill-item.component";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./pillPreview.component.style";

import img from "../../assets/adderall_25mg.jpg";
/**
 * This class generates array of swipeable pill item components
 */
class PillPreview extends Component {
  constructor() {
    super();
    this.state = {
      sampleData: [
        {
          id: 1,
          name: "Green & White Pill",
          description: "Prozac - Fluoxetine (20mg)",
          frequency: 2,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: require("../../assets/adderall_25mg.jpg")
        },
        {
          id: 2,
          name: "Orange Pill",
          description: "Adderall - Amphetamine (25mg)",
          frequency: 3,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: require("../../assets/clozapine_25mg.jpg")
        },
        {
          id: 3,
          name: "Round Pale Yellow Pill",
          description: "Clozaril - Clozapine (25mg)",
          frequency: 4,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: require("../../assets/prozac_20mg.jpg")
        },
        {
          id: 4,
          name: "Green & White Pill",
          description: "Prozac - Fluoxetine (20mg)",
          frequency: 5,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: require("../../assets/adderall_25mg.jpg")
        }
      ]
    };

    this.removePill = this.removePill.bind(this);
  }

  removePill(id) {
    this.setState({
      sampleData: this.state.sampleData.filter(pillItem => pillItem.id != id)
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          nestedScrollEnabled={true}
          data={this.state.sampleData}
          renderItem={({ item }) => (
            <SwipeablePillItem
              item={item}
              onSwipeFromLeft={() => alert("swipe left")}
              onRightPress={() => this.removePill(item.id)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const SwipeablePillItem = ({ item, onSwipeFromLeft, onRightPress }) => {
  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={onSwipeFromLeft}
      renderRightActions={(progress, dragX) => (
        <RightActions
          progress={progress}
          dragX={dragX}
          onPress={onRightPress}
        />
      )}
    >
      <PillItem {...item} />
    </Swipeable>
  );
};

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });
  return (
    <View style={styles.leftActions}>
      <Animated.Text style={[styles.ActionsText, { transform: [{ scale }] }]}>
        Taken
      </Animated.Text>
    </View>
  );
};

const RightActions = ({ progress, dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });
  return (
    <TouchableOpacity style={styles.rightActions} onPress={onPress}>
      <Animated.Text style={[styles.ActionsText, { transform: [{ scale }] }]}>
        Delete
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default PillPreview;
