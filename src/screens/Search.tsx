import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/Search/Search';

const Search = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    marginVertical: 30,
    flex: 1,
  },
});

export default Search;
