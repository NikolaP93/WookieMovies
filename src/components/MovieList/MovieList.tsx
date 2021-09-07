import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MovieType} from '../../modules/context/AppContext';
import Movie from '../Movie/Movie';

type MovieListProps = {
  categorizedMovies: MovieType[];
};

const MovieList = (props: MovieListProps): JSX.Element => {
  const {categorizedMovies} = props;

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal>
      {categorizedMovies.map(movie => (
        <Movie uri={movie.backdrop} key={movie.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    height: 60,
    width: 60,
  },
});

export default MovieList;
