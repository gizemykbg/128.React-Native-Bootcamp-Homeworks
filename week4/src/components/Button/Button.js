import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

export default function Button({onPress, text}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
