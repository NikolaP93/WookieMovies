import {useContext, useEffect} from 'react';
import {Context, actions} from '../context/AppContext';
import API from '../services/API';

function useMoviesData() {
  const {state, dispatch} = useContext(Context);

  // get movies by API call and store in state
  async function getMovies() {
    try {
      dispatch({type: actions.setMovies});
      const {data} = await API.getMovies();
      dispatch({type: actions.setMoviesSuccess, payload: data.movies});
    } catch (e) {
      dispatch({type: actions.setMoviesError});
    }
  }

  // get movie by name from state
  function getMovie(title: string) {
    return state.movies.filter(movie => movie.title === title)[0];
  }

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
    categories: state.categories,
    getMovies,
    getMovie,
  };
}

export default useMoviesData;
