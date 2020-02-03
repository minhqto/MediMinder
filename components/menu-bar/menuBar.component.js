import React, { Component } from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "react-navigation";

export default createBottomTabNavigator({
  Home: Home,
  Settings: Setting
});
