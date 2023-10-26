import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='rgba(255, 255, 255, 0.6)'
        value={value}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#883D33',
        width: 280,
        height: 38.68,

        borderColor: '#957E60',
        borderWidth: 1,
        borderRadius: 50,

        paddingHorizontal: 10,
        paddingTop: 3,
        marginTop: 17,

        //shadow for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,

        //shadow for Android
        elevation: 10,
    },

    input: {
      color: '#ffffff',
    },
});

export default CustomInput