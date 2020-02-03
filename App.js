import React from "react";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen/HomeScreen.screen";
import PrescriptionScreen from "./screens/PrescriptionScreen/PrescriptionScreen.screen";
import normalize from "react-native-normalize";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Prescription: PrescriptionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === "Home") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (routeName === "Prescription") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      showLabel: false,
      tabStyle: {
        paddingVertical: normalize(12)
      },

      activeTintColor: "#567BFF",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
