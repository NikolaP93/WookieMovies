import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import useMoviesData from '../modules/hooks/useMoviesData';
import Movie from '../components/Movie/Movie';

const {height} = Dimensions.get('screen');

type Props = {
  route: {
    params: {
      movieTitle: string;
    };
  };
};

const TITLE_SIZE = height / 36;
const POSTER_HEIGHT = height / 6;
const HORIZONTAL_SPACING = 30;

const formatYear = (datestring: string) => moment(datestring).format('YYYY');
const formatDirector = (director: string[] | string) =>
  typeof director === 'object' ? director.join(', ') : director;

const Detail = (props: Props): JSX.Element => {
  const {
    route: {
      params: {movieTitle},
    },
  } = props;

  const {getMovie} = useMoviesData();
  const {
    backdrop,
    cast,
    director,
    imdb_rating,
    length,
    overview,
    title,
    poster,
    released_on,
  } = getMovie(movieTitle);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backdropContainer}>
        <ImageBackground style={styles.backdrop} source={{uri: backdrop}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title + '(' + imdb_rating + ')'}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.posterContainer}>
        <Movie uri={poster} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoContainer}>
          <Text>{formatYear(released_on)} | </Text>
          <Text>{length} | </Text>
          <Text>{formatDirector(director)}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{cast.join(', ')}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>Movie Description: {overview}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backdropContainer: {
    flex: 3,
  },
  contentContainer: {
    flex: 7,
    paddingHorizontal: HORIZONTAL_SPACING,
    marginTop: POSTER_HEIGHT / 2,
  },
  backdrop: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  posterContainer: {
    height: POSTER_HEIGHT,
    position: 'absolute',
    alignItems: 'center',
    marginLeft: HORIZONTAL_SPACING,
    top: height / 5,
    zIndex: 1,
    elevation: 5,
    flexDirection: 'row',
  },
  titleContainer: {
    paddingLeft: HORIZONTAL_SPACING * 5,
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: TITLE_SIZE,
  },
});

export default Detail;
