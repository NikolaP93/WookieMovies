import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface MovieProps {
  uri: string;
}

const Movie = (props: MovieProps): JSX.Element => {
  const {uri} = props;

  return (
    <View>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 120,
    width: 80,
    marginHorizontal: 10,
  },
});

export default Movie;
