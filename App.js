import React from "react";
import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import Jumbotron from "./components/jumbotron/jumbotron.component";
import CircularCounter from "./components/circularCounter/circularCounter.component";
import PillItem from "./components/pill-item/pill-item.component";
import styles from "./style";

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <View style={{ height: 360 }}>
        <Jumbotron name="Viet" />
        <CircularCounter streak={30} />
      </View>

      <PillItem
        name="Green & White Pill"
        description="Prozac - Fluoxetine(20mg)"
        frequency={2}
        treatment="Anti-Depressant"
        effects="nausea, trouble-sleeping,"
        imageUrl="test image"
      />
    </ScrollView>
  </SafeAreaView>
);

export default App;
