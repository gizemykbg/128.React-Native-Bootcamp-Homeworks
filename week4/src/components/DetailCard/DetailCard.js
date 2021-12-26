import React from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './DetailCard.style';
import {useNavigation} from '@react-navigation/native';
import SimilarSection from '../SimilarSection';
import Button from '../../components/Button';
import routes from '../../navigation/routes';

export default function DetailCard({movie, recommendedMovies}) {
  const navigation = useNavigation();
  const handleNavigate = item => {
    navigation.navigate(routes.MOVIES_DETAIL_PAGE, {movie: item});
  };
  const renderRecommended = ({item}) => {
    return <SimilarSection item={item} onSelect={() => handleNavigate(item)} />;
  };

  const goComments = () => {
    navigation.navigate(routes.COMMENT_VIEW_PAGE, {movieId: movie.id});
  };

  return (
    <ScrollView stle={styles.detailcard}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?grayscale'}}
            style={styles.posterImage}
          />
        </View>
        <View style={styles.rate_container}>
          <Text style={styles.title}>{movie.name}</Text>
          <Text style={styles.subtitle}>{movie.rate}</Text>
          <Rating
            showRating
            ratingCount={5}
            fractions="{1}"
            readonly
            startingValue={movie.rate / 2}
            imageSize={17}
          />
        </View>
      </View>
      <Text style={styles.title}>Genre: </Text>
      <Text style={styles.genre}>{movie?.genre.map(item => `${item},`)}</Text>
      <Text style={styles.title}>Recommended Movie</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={recommendedMovies}
        renderItem={renderRecommended}
      />
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.subtitle}>{movie.brief}</Text>
      <Text style={styles.title}>Cast: </Text>
      <Text style={styles.genre}>{movie?.cast.map(item => `${item},`)}</Text>
      <Button text="See Reviews" onPress={goComments} />
    </ScrollView>
  );
}
