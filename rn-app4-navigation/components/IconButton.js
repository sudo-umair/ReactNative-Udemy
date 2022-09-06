import { View, Text, Pressable, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import React from 'react'

export default function IconButton({icon, onPress, color}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  }
})