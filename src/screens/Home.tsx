import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMoviesData from '../modules/hooks/useMoviesData';
import MovieList from '../components/MovieList/MovieList';

const Home = (): JSX.Element => {
  const {movies, getMovies} = useMoviesData();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MovieList categorizedMovies={movies} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
