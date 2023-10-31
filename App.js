import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './src/Navigations/HomeNavigator';




const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <HomeNavigator/>  
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F8EFD0",
  }, 
});

export default App;
