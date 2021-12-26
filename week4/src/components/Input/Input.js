import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.style';

export default function Input({label, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput color="white" {...props} />
      </View>
    </View>
  );
}
