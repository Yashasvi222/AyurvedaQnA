import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import React from 'react'


const MainScreen = () => {

  const {height, width} = useWindowDimensions();

  return (
    <View style={[styles.root, {height: height}]}>

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <Text>MainScreen</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: "#F8EFD0",
  }
})

export default MainScreen