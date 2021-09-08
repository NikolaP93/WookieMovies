import {useContext, useEffect} from 'react';
import {Context, actions} from '../context/AppContext';
import API from '../services/API';

function useMoviesData() {
  const {state, dispatch} = useContext(Context);

  async function getMovies() {
    try {
      dispatch({type: actions.setMovies});
      const {data} = await API.getMovies();
      dispatch({type: actions.setMoviesSuccess, payload: data.movies});
    } catch (e) {
      dispatch({type: actions.setMoviesError});
    }
  }

  useEffect(() => {
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
    categories: state.categories,
    getMovies,
  };
}

export default useMoviesData;
