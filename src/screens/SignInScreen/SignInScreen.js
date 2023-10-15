import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/index.js'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in")
  }

  return (
    <View style={styles.root}>
      <Text></Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Sign In" onPress={onSignInPressed}/>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
})

export default SignInScreen