import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C6A286',
        width: 280,
        height: 38.68,

        borderColor: '#957E60',
        borderWidth: 1,

        paddingHorizontal: 10,
        paddingTop: 3,
        marginVertical: 19.31,
    },

    input: {},
});

export default CustomInput