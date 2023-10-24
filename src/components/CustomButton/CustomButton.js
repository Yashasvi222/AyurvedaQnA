import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#629035',
        width: 280,
        height: 47,
        padding: 13,
        alignItems: 'center',
        marginTop: 30,

        borderRadius: 50,

    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
})

export default CustomButton;