import React from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MovieType} from '../../modules/context/AppContext';
import Movie from '../Movie/Movie';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../navigation/config/Routes';

const {height} = Dimensions.get('screen');

type MovieListProps = {
  movies: MovieType[];
  genre: string;
};

const MovieList = (props: MovieListProps): JSX.Element => {
  const {movies, genre} = props;
  const navigation = useNavigation();

  const onPress = (movieTitle: string) =>
    navigation.navigate(HomeRoutes.details, {movieTitle});

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{genre}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        {movies.map(
          movie =>
            movie.genres.includes(genre) && (
              <Movie
                uri={movie.poster}
                key={movie.id}
                onPress={onPress}
                title={movie.title}
              />
            ),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  labelContainer: {
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
  },
});

export default MovieList;
