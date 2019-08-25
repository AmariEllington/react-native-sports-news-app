import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const NewsCard = props => {
  const { title, urlToImage } = props.item;

  return (
    <View>
      <Text>{title}</Text>
      <Image source={{ uri: urlToImage }} style={{ width: 500, height: 200 }} />
    </View>
  );
};

const style = StyleSheet.create({});

export default NewsCard;
