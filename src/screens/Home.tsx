import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../components/Text/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

import useMoviesData from '../modules/hooks/useMoviesData';
import MovieList from '../components/MovieList/MovieList';
import {ScrollView} from 'react-native-gesture-handler';
import constants from '../constants/index';

const Home = (): JSX.Element => {
  const {categories, movies, getMovies} = useMoviesData();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text h1>{constants.strings.common.title}</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        bounces={false}>
        {categories.map(category => (
          <MovieList key={category} genre={category} movies={movies} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },
});

export default Home;
