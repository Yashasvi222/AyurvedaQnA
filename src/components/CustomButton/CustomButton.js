import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 47,
        padding: 13,
        alignItems: 'center',
        marginTop: 30,

        borderRadius: 50,

        //shadow for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,

        //shadow for Android
        elevation: 10,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
})

export default CustomButton;