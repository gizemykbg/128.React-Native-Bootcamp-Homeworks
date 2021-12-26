import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './SimilarSection.style';

export default function SimilarSection({item, onSelect}) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/200/300?grayscale',
        }}
      />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.director}</Text>
      </View>
    </TouchableOpacity>
  );
}
