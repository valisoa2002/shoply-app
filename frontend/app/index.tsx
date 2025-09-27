import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default class index extends Component {
  render() {
    return (
      <View className="flex justify-center items-center">
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}> Hello World!! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "red",
    padding: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "semibold",
  },
});
