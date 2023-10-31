import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import { query } from '../../AuyrBotAPI'


const MainScreen = () => {
  const {height, width} = useWindowDimensions();

  const result = query({
    "query": "What does the term 'panchakarma' refer to in Ayurveda, and how many traditional cleansing actions are associated with it?",
    "top_n": 3
  }).then((response) => {
    console.log(JSON.stringify(response));
  });

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