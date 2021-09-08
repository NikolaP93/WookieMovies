import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useMoviesData from '../modules/hooks/useMoviesData';
import MovieList from '../components/MovieList/MovieList';
import {ScrollView} from 'react-native-gesture-handler';

const Home = (): JSX.Element => {
  const {categories, movies, getMovies} = useMoviesData();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}>
        {categories.map(category => (
          <MovieList
            key={category}
            genre={category}
            categorizedMovies={movies}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Home;
