import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import React from 'react'
import CustomOutput from '../../components/CustomOutput'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'



const MainScreen = ({route}) => {
  console.log(route.params.userInfo)

  const {height, width} = useWindowDimensions();

  return (
    <View style={[styles.root, {height: height}]}>

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <View style={styles.greet_container}>
        <Text style={styles.greet}>Welcome {route.params.userInfo}!</Text>
      </View>

      <CustomInput
      placeholder="Ask me something"
      />

      <View style={styles.custom_output_container}>
        <CustomOutput/>
        <CustomOutput/>
        <CustomOutput/>
      </View>

      <View style={styles.answer_container}>
        <CustomButton
        text="Answer"
        color="#629035"
        onPress={()=>{console.warn('wdf')}}
        />
      </View>

      <Image source={LowerGlaze}
        style={[styles.lower_glaze, {top: height-height*0.2, width: width}]}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      backgroundColor: "#F8EFD0",
    },

    upper_glaze: {
      position: 'absolute',
      resizeMode: 'contain',
  },

  greet: {
    fontSize: 30,
    fontWeight: '500',
    color: '#883D33',
  },

  greet_container: {
    width: 280,
    marginBottom: 15,
  },

  custom_output_container: {
    marginTop: 40,
  },

  answer_container: {
    marginTop: 30,
  },

  lower_glaze: {
    position: 'absolute',
  },
})

export default MainScreen