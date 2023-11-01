import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomOutput = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#883D33',
        width: 296,
        height: 56,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
      color: 'white'
    }
})

export default CustomOutput