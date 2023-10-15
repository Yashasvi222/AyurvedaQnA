import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../components/CustomInput'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.root}>
      <Text></Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword}/>
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