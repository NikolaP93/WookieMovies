import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Text from '../components/Text/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

import useMoviesData from '../modules/hooks/useMoviesData';
import MovieList from '../components/MovieList/MovieList';
import constants from '../constants/index';

const Home = (): JSX.Element => {
  const {categories, movies} = useMoviesData();

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
    backgroundColor: constants.colors.white,
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
