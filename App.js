import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

const App = () => {
  return (
    <ScrollView style={styles.root}>
      
      <SignInScreen />
      {/* <SignUpScreen /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F8EFD0",
  }, 
});

export default App;
