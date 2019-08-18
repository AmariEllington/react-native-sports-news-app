import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const baseURL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;
export default class HomeScreen extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          data: resp.articles
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.data);

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
