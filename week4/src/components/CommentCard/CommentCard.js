import React from 'react';
import {View, Text} from 'react-native';

import styles from './CommentCard.style';

export default function CommentCard({item}) {
  return (
    <View style={styles.container}>
      {item.name ? <Text style={styles.text}>Name: {item.name}</Text> : null}
      <Text style={styles.text}>Comment : {item.comment}</Text>
      {item.name ? <Text style={styles.text}>Rate: {item.rate}</Text> : null}
    </View>
  );
}
