import React, { Component } from "react";
import {
  FlatList,
  View,
  Text,
  Alert,
  SafeAreaView,
  Animated
} from "react-native";
import PillItem from "../pill-item/pill-item.component";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MyText from "../myText/myText.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./pillPreview.component.style";

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
          imageUrl: "comming soon"
        },
        {
          id: 2,
          name: "Orange Pill",
          description: "Adderall - Amphetamine (25mg)",
          frequency: 3,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: "comming soon"
        },
        {
          id: 3,
          name: "Round Pale Yellow Pill",
          description: "Clozaril - Clozapine (25mg)",
          frequency: 4,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: "comming soon"
        },
        {
          id: 4,
          name: "Green & White Pill",
          description: "Prozac - Fluoxetine (20mg)",
          frequency: 5,
          treatment: "Anti-Depressant",
          effects:
            "nausea,trouble-sleeping,nervousness,tremors,sexual problems",
          imageUrl: "comming soon"
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
              onSwipeFromLeft={() => this.removePill(item.id)}
              onRightPress={() => alert("press right")}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1.5],
    extrapolate: "clamp"
  });
  return (
    <View style={styles.leftActions}>
      <Animated.Text
        style={[styles.leftActionsText, { transform: [{ scale }] }]}
      >
        Taken
      </Animated.Text>
    </View>
  );
};

const SwipeablePillItem = ({ item, onSwipeFromLeft, onRightPress }) => {
  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={onSwipeFromLeft}
    >
      <PillItem {...item} />
    </Swipeable>
  );
};

export default PillPreview;
