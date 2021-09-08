import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, Dimensions, View} from 'react-native';
import constants from '../../constants';
import useMoviesData from '../../modules/hooks/useMoviesData';
import debounce from 'lodash.debounce';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Text from '../Text/Text';

const {height, width} = Dimensions.get('screen');

interface Props {
  // onChange(): void;
}

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const {queryMovies, queriedMovies} = useMoviesData();

  const debouncedQuery = debounce(queryMovies, 800);

  useEffect(() => {
    debouncedQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const renderItem = (title: string) => {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.container} onChangeText={setQuery} />
      {queriedMovies.length > 0 && (
        <ScrollView style={{flexGrow: 1}}>
          {queriedMovies.map(movie => (
            <Text>{movie.title}</Text>
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
    width: (width * 4) / 5,
    alignItems: 'center',
  },
});

export default SearchInput;
