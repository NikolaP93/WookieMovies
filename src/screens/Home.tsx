import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMoviesData from '../modules/hooks/useMoviesData';

const Home = (): JSX.Element => {
  const {movies, getMovies} = useMoviesData();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {movies.map(movie => (
        <Text>{movie.title}</Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
