import React from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MovieCard.styles';

export default function MovieCard({movie, onSelect}) {

  function ListItem(props) {
    return (
      <View style={styles.genre_container}>
        <Text style={styles.genre_label}>{props.gnr}</Text>
      </View>
    );
  }

  function movieGenresList() {
    const genre = movie.genre.map((gnr, ind) => (
      <ListItem key={ind} gnr={gnr} />
    ));
    if (genre) {
      return (
        <ScrollView horizontal bounces={false}>
          {genre}
        </ScrollView>
      );
    }
  }

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.name}>{movie.name}</Text>
        <Text numberOfLines={2} style={styles.brief}>{movie.brief}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            {movieGenresList()}
            <View style={styles.rate_container}>
              <Icon name="star" color="orange" size={25} />
              <Text style={styles.rate}>{movie.rate}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
