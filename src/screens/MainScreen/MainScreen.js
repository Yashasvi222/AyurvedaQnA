import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'


const MainScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.root, {height: height}]}>

    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
    },
})

export default MainScreen