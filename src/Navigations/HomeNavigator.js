import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";


const Stack=createStackNavigator();



function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home'
         component={HomeScreen}/>
         <Stack.Screen name='SignInScreen'
         component={SignInScreen}
         />
    </Stack.Navigator>
  )
}

export default HomeNavigator
