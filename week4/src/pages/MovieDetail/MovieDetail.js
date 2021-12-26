import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import DetailCard from '../../components/DetailCard';
import useFetch from '../../hooks/useFetch';
import styles from './MovieDetail.styles';

const URL = 'http://10.0.2.2:3000/movies';

export default function MovieDetail() {
  const {data: moviesData} = useFetch(URL);
  const route = useRoute();
  const {movie} = route.params;

  const recommendedMovies = moviesData.filter(m => {
    return m.genre.some(g => movie.genre.includes(g));
  });

  return (
    <SafeAreaView style={styles.container}>
      <DetailCard movie={movie} recommendedMovies={recommendedMovies} />
    </SafeAreaView>
  );
}