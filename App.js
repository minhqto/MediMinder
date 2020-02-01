import React from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import Jumbotron from "./components/jumbotron/jumbotron.component";
import CircularCounter from "./components/circularCounter/circularCounter.component";
import PillItem from "./components/pill-item/pill-item.component";

import styles from "./style";
import PillPreview from "./components/pillPreview/pillPreview.component";

const App = () => (
  // <SafeAreaView style={styles.container}>
  <ScrollView style={styles.container} alwaysBounceVertical={false}>
    <View>
      <View style={{ height: 360 }}>
        <Jumbotron name="Viet" />
        <CircularCounter streak={30} />
      </View>

      <PillPreview />
    </View>
  </ScrollView>
  // </SafeAreaView>
);

export default App;
