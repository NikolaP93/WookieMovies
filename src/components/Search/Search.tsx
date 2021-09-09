import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import constants from '../../constants';
import useMoviesData from '../../modules/hooks/useMoviesData';
import debounce from 'lodash.debounce';
import Text from '../Text/Text';
import Movie from '../Movie/Movie';
import {useNavigation} from '@react-navigation/native';
import {HomeRoutes} from '../../navigation/config/Routes';

const {height, width} = Dimensions.get('screen');

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const {queryMovies, queriedMovies} = useMoviesData();
  const navigation = useNavigation();

  const debouncedQuery = debounce(queryMovies, 800);

  useEffect(() => {
    debouncedQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onPress = (movieTitle: string) => {
    navigation.navigate(HomeRoutes.details, {movieTitle});
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.container} onChangeText={setQuery} />
      {queriedMovies.length > 0 && (
        <ScrollView style={styles.scrollView}>
          {queriedMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              style={styles.results}
              onPress={() => onPress(movie.title)}>
              <Movie uri={movie.poster} />
              <Text>{movie.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 15,
    width: '100%',
    borderWidth: 1,
    backgroundColor: constants.colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  mainContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
    width: (width * 4) / 5,
  },
  scrollView: {
    flexGrow: 1,
    width: '100%',
  },
  results: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    width: '100%',
    marginVertical: 1,
    borderWidth: 1,
    paddingVertical: 5,
  },
});

export default SearchInput;
