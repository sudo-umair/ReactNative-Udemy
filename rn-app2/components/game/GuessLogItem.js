import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

export default function GuessLogItem({ guess, roundNumber }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    // flex: 1,
    borderColor: Colors.primary800,
    width: "100%",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,

    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
