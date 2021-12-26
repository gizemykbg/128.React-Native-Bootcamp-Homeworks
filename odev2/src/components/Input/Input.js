import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.style';

function Input({value, label, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}
export default Input;
