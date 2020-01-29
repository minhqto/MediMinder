import React, { Component } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

class MyText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Poppins: require("../../assets/fonts/Poppins-Regular.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { children, style } = this.props;
    if (this.state.fontLoaded) {
      return (
        <Text style={{ fontFamily: "Poppins" }}>
          <Text style={style}>{children}</Text>
        </Text>
      );
    }
    return null;
  }
}

export default MyText;
