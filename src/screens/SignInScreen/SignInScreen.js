import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native'
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
  
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("NKBH")
  }

  return (
    <View style={styles.root}>
      <Image source={UpperGlaze}
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
      onPress={onSignInPressed}
      />
      <Image source={LowerGlaze}
        style={styles.lower_glaze}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    height: 732,
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
    top: 600,
  }
})
export default SignInScreen