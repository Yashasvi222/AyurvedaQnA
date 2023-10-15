import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const {height} = useWindowDimensions();

  const onRegisterPressed = () => {
    console.warn("Registered")
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an Account</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder="Email Id" value={email} setValue={setEmail} secureTextEntry={false} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
      <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
      <CustomButton text="Register" onPress={onRegisterPressed}/>
      <Text>By registering, you confirm that you accept our <Text> Terms of Use </Text> and <Text>Privacy Policy</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#957E60',
      margin: 10,
    }
})

export default SignUpScreen