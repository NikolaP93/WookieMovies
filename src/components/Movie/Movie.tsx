import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface MovieProps {
  uri: string;
}

const Movie = (props: MovieProps): JSX.Element => {
  const {uri} = props;

  return <Image source={{uri}} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: 120,
  },
});

export default Movie;
