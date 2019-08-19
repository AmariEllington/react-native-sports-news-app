import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("News")}>
          <Text>Go to news!</Text>
        </TouchableOpacity>
      </View>
    );
    const styles = StyleSheet.create({});
  }
}
