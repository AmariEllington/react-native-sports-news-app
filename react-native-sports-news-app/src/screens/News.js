import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import NewsCard from "../components/NewsCard";
import { StackGestureContext } from "react-navigation";

const baseURL = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=a445e20ba5484749b0fa9b70ac35f421`;

export default class News extends Component {
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
    const { data } = this.state;
    console.log(this.state.data);
    return (
      <View>
        <FlatList renderItem={data => <NewsCard item={data} />} />
      </View>
    );
  }
}
