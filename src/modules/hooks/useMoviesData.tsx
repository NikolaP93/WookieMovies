import {useContext} from 'react';
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

  return {
    movies: state.movies,
    getMovies,
  };
}

export default useMoviesData;
