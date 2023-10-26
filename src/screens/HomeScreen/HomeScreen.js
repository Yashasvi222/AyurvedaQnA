import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton/index.js'
import Ayurbot from '../../../assets/SignIn/Ayurbot.png'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import Grass from '../../../assets/Grass.png'
import Grass1 from '../../../assets/Grass_1.png'
import Grass2 from '../../../assets/Grass_2.png'
import Grass3 from '../../../assets/Grass_3.png'
import LeftLeaf from '../../../assets/LeftLeaf.png'
import RightLeaf from '../../../assets/RightLeaf.png'
import PestleAndMortar from '../../../assets/PestleAndMortar.png'



const HomeScreen = () => {

  const {height, width} = useWindowDimensions();

  return (
    <View style={[styles.root, {height: height}]}>
      <StatusBar backgroundColor="black" />

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <Image source={Ayurbot}
        style={styles.logo}
      />

      <Image source={PestleAndMortar}
        style={styles.pestle_and_mortar}
      />

      <View style={styles.tagline_view}>
        <Text style={styles.tagline}>Ayurveda at your Fingertips Your Health, Your Way</Text>
      </View>

      <Image source={LeftLeaf}
        style={[styles.left_leaf, {top:height-1.22*height, left: width-1.451*width}]}
      />

      <Image source={RightLeaf}
        style={[styles.right_leaf, {top:height-1.22*height, left: width-0.558*width}]}
      />

      <Image source={LowerGlaze}
        style={[styles.lower_glaze, {top: height-height*0.273, width: width}]}
      />

      <View 
        style={[styles.getStartedContainer, {top: height-1.014*height}]}>
        <CustomButton text="Get Started" color="#883D33"/>
      </View>

      <Image source={Grass}
        style={[styles.grass, {top:height-height*1.08, left: width-width*1.448}]}
      />

      <Image source={Grass2}
        style={[styles.grass2, {top:height-height*1.116, left: width-width*1.15}]}
      />

      <Image source={Grass3}
        style={[styles.grass3, {top:height-height*1.172, left: width-width*0.916}]}
      />  

      <Image source={Grass1}
        style={[styles.grass3, {top:height-height*1.2591, left: width-width*0.562}]}
      />      

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },

  upper_glaze: {
    position: 'absolute',
    resizeMode: 'contain',
  },  

  logo: {
    width: 174,
    height: 70,
    marginTop: 10,
    marginBottom: 80,
    resizeMode: 'contain',
  },

  pestle_and_mortar: {
    marginTop: 40,
  },

  tagline_view: {
    width:220,
  },

  tagline: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '300',
    color: '#883D33',
  },

  lower_glaze: {
    position: 'absolute',
  },

})

export default HomeScreen