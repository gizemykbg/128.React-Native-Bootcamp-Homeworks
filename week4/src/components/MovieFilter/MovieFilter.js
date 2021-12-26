import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import Button from '../../components/Button';
import MovieCard from '../../components/MovieCard';
import MovieFilterModal from '../GenreModal/GenreModal';
import routes from '../../navigation/routes';
import styles from './MovieFilter.styles';
import useMovies from '../../hooks/useFetch';

const MoviesFilter = () => {
  const url = 'http://10.0.2.2:3000/movies';

  const navigation = useNavigation();

  const [selectedGenre, setSelectedGenre] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const {data, isLoading, hasError, setParams, refetch} = useMovies(url);

  const renderMovies = ({item}) => (
    <MovieCard movie={item} onSelect={() => goDetailPage(item)} />
  );

  function goDetailPage(selectedMovie) {
    navigation.navigate(routes.MOVIES_DETAIL_PAGE, {movie: selectedMovie});
  }

  useEffect(() => {
    setParams({
      genre: selectedGenre,
    });
  }, [selectedGenre]);

  if (hasError) {
    Alert.alert('Movies', 'An error oncurred');
  }

  function getGenre(genre) {
    setSelectedGenre(genre);
    refetch();
  }

  function onModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderMovies}
      />
      <MovieFilterModal
        isVisible={modalVisible}
        onClose={onModal}
        dataSend={getGenre}
      />
      <Button text="FILTER" onPress={onModal} />
    </ImageBackground>
  );
};

export default MoviesFilter;
