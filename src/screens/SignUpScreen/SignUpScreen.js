import { View, Text, StyleSheet, useWindowDimensions, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'
import Ayurbot from '../../../assets/SignIn/Ayurbot.png'
import UpperGlaze from '../../../assets/SignIn/UpperGlaze.png'
import LowerGlaze from '../../../assets/SignIn/LowerGlaze.png'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {

  async function query(data) {
    const response = await fetch(
      "https://ayurbot.azurewebsites.net/signup",
      {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(data),
      });
    const result = await response.json();
    return result;
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {height, width} = useWindowDimensions();

  const navigation=useNavigation();

  const onRegisterPressed = () => {
    if (!username) {
      console.warn('Please enter a username.');
    } else if (!email) {
      console.warn('Please enter your email address.');
    } else if (!validateEmail(email)) {
      console.warn('Please enter a valid email address.');
    } else if (!password) {
      console.warn('Please enter a password.');
    } else if (!validatePassword(password)) {
      console.warn('Password must be at least 6 characters long and contain at least one number, one lowercase letter, and one uppercase letter.');
    } else if (password !== confirmPassword) {
      console.warn('Passwords do not match!');
    } else {
      const result = query({
        "username": username,
        "email": email,
        "password": password
    }).then((response) => {
      // console.log(JSON.stringify(response));
      const check = JSON.stringify(response['msg'])
      if(check=='"Signup Successful"'){
        navigation.navigate('MainScreen')
      } else {
        console.warn('SignUp Failed, Try Again')
      }
    });
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
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
      color="#629035" 
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
        backgroundColor: "#F8EFD0",
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