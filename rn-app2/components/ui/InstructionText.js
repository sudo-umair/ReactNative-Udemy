import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function InstructionText(props) {
  return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
}


const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 26,
    textAlign: "center",
    fontFamily: "open-sans",
  },
});