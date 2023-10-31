import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'
import Ayurbot from '../../../assets/SignIn/Ayurbot.png'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

  async function query(data) {
    const response = await fetch(
      "https://ayurbot.azurewebsites.net//login",
      {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(data),
      });
    const result = await response.json();
    return result;
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {height, width} = useWindowDimensions();

  const navigation=useNavigation();

  const onSignInPressed = () => {
    if (!username) {
      console.warn('Please enter your username.');
    }
    else if (!password) {
      console.warn('Please enter your password');
    } else {
    const result = query({
      "username": username,
      "password": password
    }).then((response) => {
      const check = JSON.stringify(response['msg'])
      if(check=='"Login Successful"'){
        navigation.navigate('MainScreen')
      } else {
        console.warn('This account does not exist, Create one')
      }
    });
    }
  };

  const onCreateAccount = () => {
    navigation.navigate('SignUpScreen')
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

      <TouchableOpacity onPress={onCreateAccount} style={styles.account}>
        <Text style={styles.account_text}>Create an Account</Text>
      </TouchableOpacity>
      
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

  logo: {
    width: 174,
    height: 70,
    marginTop: 10,
    marginBottom: 80,
    resizeMode: 'contain',
  },

  account: {
    backgroundColor: "#F8EFD0",
    width: 125,
    height: 21,
    marginTop: 15,
    alignItems:'center',
    justifyContent:'center',
  },

  account_text: {
    color: "#883D33",
    fontWeight: "700",
  },

  lower_glaze: {
    position: 'absolute',
  }
})
export default SignInScreen