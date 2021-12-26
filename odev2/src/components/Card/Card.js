import React from 'react';
import {View, Text} from 'react-native';
import styles from './Card.style';

const Card = props => {
  console.log(props.name);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};
export default Card;
