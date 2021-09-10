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
import StarRating from 'react-native-star-rating';

import constants from '../constants/index';

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

// check type and format according to it
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
        <View style={styles.starStyle}>
          <StarRating
            rating={imdb_rating / 2}
            activeOpacity={1}
            maxStars={5}
            starSize={TITLE_SIZE}
          />
        </View>
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
          <Text>
            {constants.strings.common.movie_description}
            {overview}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: constants.colors.white,
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
    height: height / 4,
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
    alignItems: 'flex-end',
    marginLeft: HORIZONTAL_SPACING,
    zIndex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    paddingLeft: HORIZONTAL_SPACING * 5,
    marginLeft: 10,
  },
  title: {
    color: constants.colors.white,
    fontSize: TITLE_SIZE,
  },
  starStyle: {
    marginHorizontal: 10,
  },
});

export default Detail;
