import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FilterButton.style';

const FilterButton = ({onPress, text}) => {
  return (
    <View style={styles.btn_container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilterButton;
