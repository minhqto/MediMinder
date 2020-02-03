import React, { Component } from "react";
import * as Font from "expo-font";
import MyIcon from "react-native-custom-icon";
import IcomoonConfig from "../../selection.json";

class CustomIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      icomoon: require("../../assets/resources/fonts/icomoon.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { name, color, size, config } = this.props;
    if (this.state.fontLoaded) {
      return <MyIcon name={name} color={color} size={size} config={config} />;
    }
    return null;
  }
}

export default CustomIcon;
