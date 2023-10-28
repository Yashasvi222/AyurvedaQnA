import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'
import Ayurbot from '../../../assets/SignIn/Ayurbot.png'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import {Dimensions} from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {height, width} = useWindowDimensions();

  const onSignInPressed = () => {
    if (!username) {
      console.warn('Please enter your username.');
    }
    else if (!password) {
      console.warn('Please enter your password');
    } else {
      console.warn('Signed In');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={[styles.root, {height: height}]}>
      <StatusBar backgroundColor="black" />

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <Image source={Ayurbot}
        style={styles.logo}
      />

      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername} 
      secureTextEntry={false}
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />
      
      <CustomButton 
      text="Sign In" 
      color="#629035"
      onPress={onSignInPressed}
      />
      
      <Image source={LowerGlaze}
        style={[styles.lower_glaze, {top: height-height*0.2, width: width}]}
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

  lower_glaze: {
    position: 'absolute',
  }
})
export default SignInScreen