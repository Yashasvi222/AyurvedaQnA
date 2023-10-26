import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#FFF"
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
    },

    input: {
      color: '#ffffff',
    },
});

export default CustomInput