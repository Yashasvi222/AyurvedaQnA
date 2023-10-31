import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import MainScreen from "../screens/MainScreen/MainScreen";


const Stack=createStackNavigator();



function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home'
         component={HomeScreen}/>
         <Stack.Screen name='SignUpScreen'
         component={SignUpScreen}
         />
         <Stack.Screen name='SignInScreen'
         component={SignInScreen}
         />
         <Stack.Screen name='MainScreen'
         component={MainScreen}
         />
         
    </Stack.Navigator>
  )
}

export default HomeNavigator
