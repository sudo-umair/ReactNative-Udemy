import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
    borderRadius: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});
