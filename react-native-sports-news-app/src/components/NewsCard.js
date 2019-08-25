import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const NewsCard = props => {
  const { title, urlToImage, url } = props.item;

  return (
    <View style={styles.newsCard}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 200
  },
  newsCard: {
    borderWidth: 2,
    borderColor: "#000000"
  },
  text: {
    textAlign: "center"
  }
});

export default NewsCard;
