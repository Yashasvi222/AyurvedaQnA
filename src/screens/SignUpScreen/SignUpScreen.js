import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'
import Ayurbot from '../../../assets/SignIn/Ayurbot.png'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {height, width} = useWindowDimensions();

  const onRegisterPressed = () => {
    console.warn("Registered")
  }

  return (
    <View style={[styles.root, {height: height}]}>
      <StatusBar backgroundColor="black" />

      <Image source={UpperGlaze}
        style= {{width: width}}
      />

      <Image source={Ayurbot}
        style={styles.logo}
      />

      <Text style={styles.title}>Create an Account</Text>

      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername} 
      secureTextEntry={false} 
      />
       
      <CustomInput 
      placeholder="Email Id" 
      value={email} 
      setValue={setEmail} 
      secureTextEntry={false} 
      />
       
      <CustomInput 
      placeholder="Set Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true} 
      />

      <CustomInput 
      placeholder="Confirm Password" 
      value={confirmPassword} 
      setValue={setConfirmPassword} 
      secureTextEntry={true}
      />

      <CustomButton 
      text="Register" 
      onPress={onRegisterPressed}
      />

      <View style={styles.tnc_view}>
        <Text style={styles.tnc}>By registering, you confirm that you accept our <Text> Terms of Use </Text> and <Text>Privacy Policy</Text></Text>
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
    },

    upper_glaze: {
        position: 'absolute',
        resizeMode: 'contain',
    },

    logo: {
      width: 148,
      height: 70,
      marginBottom: 30,
      resizeMode: 'contain',
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgba(136, 61, 51, 0.7)',
      marginTop: 8,    
      marginBottom: 6, 
    },

    tnc_view: {
      marginTop: 8,
      width: 250,
    },

    tnc: {
      textAlign: 'center',
      fontSize: 11,
    },

    lower_glaze: {
      position: 'absolute',
    },

})

export default SignUpScreen