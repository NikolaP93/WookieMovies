import {useContext, useEffect} from 'react';
import {Context, actions} from '../context/AppContext';
import API from '../services/API';
import errorMessageHandler from '../../components/ErrorHandler/ErrorHandler';
import RNBootSplash from 'react-native-bootsplash';
import localStorage from '../../utils/Storage';

function useMoviesData() {
  const {state, dispatch} = useContext(Context);

  // get movies by API call and store in state
  async function getMovies() {
    try {
      dispatch({type: actions.setMovies});
      const {data} = await API.getMovies();
      dispatch({type: actions.setMoviesSuccess, payload: data.movies});
    } catch (e) {
      if (e instanceof Error) {
        errorMessageHandler(e);
      }
      dispatch({type: actions.setMoviesError});
    } finally {
      RNBootSplash.hide();
    }
  }

  // get movie by name from state
  function getMovie(title: string) {
    return state.movies.filter(movie => movie.title === title)[0];
  }

  async function setFavoriteMovie(movie: string) {
    dispatch({type: actions.setFavoriteMovie});

    const movieExists = state.favoriteMovies.includes(movie);
    if (movieExists) {
      const movieIndex = state.favoriteMovies.indexOf(movie);
      const payload = [...state.favoriteMovies];
      payload.splice(movieIndex, 1);
      localStorage.deleteFavorite(payload);
      return dispatch({
        type: actions.setFavoriteMovieSuccess,
        payload,
      });
    }
    localStorage.setFavorite(movie);
    dispatch({
      type: actions.setFavoriteMovieSuccess,
      payload: state.favoriteMovies.concat(movie),
    });
  }

  async function getFavoriteMovies() {
    dispatch({type: actions.setFavoriteMovie});
    const payload = await localStorage.getFavorite();
    dispatch({type: actions.setFavoriteMovieSuccess, payload});
  }

  async function queryMovies(query: string) {
    if (query.length === 0) {
      return dispatch({
        type: actions.setQueriedMoviesSuccess,
        payload: [],
      });
    }

    try {
      dispatch({type: actions.setQueriedMovies});
      const {data} = await API.queryMovies(query);
      dispatch({type: actions.setQueriedMoviesSuccess, payload: data.movies});
    } catch (e) {
      if (e instanceof Error) {
        errorMessageHandler(e);
      }
      dispatch({type: actions.setQueriedMoviesError});
    }
  }

  useEffect(() => {
    getMovies();
    getFavoriteMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // get each unique category
    function setUniqueCategories() {
      const categories: string[] = [];

      state.movies.map(movie =>
        movie.genres.map(genre => categories.push(genre)),
      );

      const uniqueCategories = [...new Set(categories)];

      dispatch({type: actions.setUniqueCategories, payload: uniqueCategories});
    }

    setUniqueCategories();
  }, [state.movies, dispatch]);

  return {
    movies: state.movies,
    queriedMovies: state.queriedMovies,
    categories: state.categories,
    getMovie,
    queryMovies,
    loading: state.loading,
    setFavoriteMovie,
    favoriteMovies: state.favoriteMovies,
  };
}

export default useMoviesData;
