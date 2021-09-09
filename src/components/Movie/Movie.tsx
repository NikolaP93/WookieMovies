import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface MovieProps {
  uri: string;
  title?: string | undefined;
  onPress?(name: string): any;
}

const Movie = (props: MovieProps): JSX.Element => {
  const {uri, onPress = () => null, title = ''} = props;

  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress(title)}>
      <Image resizeMode="contain" source={{uri}} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: 120,
  },
});

export default Movie;
