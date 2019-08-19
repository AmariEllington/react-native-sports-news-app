import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NewsCard = props => {
  const { title } = props.item;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default NewsCard;
