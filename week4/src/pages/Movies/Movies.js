import React from 'react';

import {SafeAreaView} from 'react-native';
import MovieFilter from '../../components/MovieFilter';
import styles from './Movies.styles';

export default function Movies() {
  return (
    <SafeAreaView style={styles.container}>
      <MovieFilter />
    </SafeAreaView>
  );
}
