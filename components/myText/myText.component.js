import React, { Component } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

/**
 * This class generates our custom font (Poppins) for the text
 */
class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Poppins: require("../../assets/resources/fonts/Poppins-Regular.ttf"),
      PoppinsBold: require("../../assets/resources/fonts/Poppins-Bold.ttf"),
      PoppinsSemiBold: require("../../assets/resources/fonts/Poppins-SemiBold.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { children, style } = this.props;
    let myStyle;

    if (style != null) {
      if (style.fontWeight == "bold") {
        myStyle = { ...style, fontFamily: "PoppinsBold" };
      } else if (style.fontWeight) {
        myStyle = { ...style, fontFamily: "PoppinsSemiBold" };
      } else {
        myStyle = { ...style, fontFamily: "Poppins" };
      }
    } else {
      myStyle = { fontFamily: "Poppins" };
    }

    if (this.state.fontLoaded) {
      return <Text style={myStyle}>{children}</Text>;
    }
    return null;
  }
}

export default MyText;
