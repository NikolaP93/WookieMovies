import * as React from 'react';

export type MovieType = {
  backdrop: string;
  cast: string[];
  id: string;
  title: string;
  length: string;
  director: string[] | string;
  overview: string;
  imdb_rating: number;
  genres: string[];
  poster: string;
  released_on: string;
};

type InitialStateType = {
  movies: MovieType[];
  categories: string[];
  queriedMovies: MovieType[];
  favoriteMovies: string[];
  error: boolean;
  loading: boolean;
};

const initialState: InitialStateType = {
  movies: [],
  categories: [],
  queriedMovies: [],
  favoriteMovies: [],
  error: false,
  loading: false,
};

export const actions = {
  setMovies: 'setMovies',
  setMoviesError: 'setMoviesError',
  setMoviesSuccess: 'setMoviesSuccess',
  setUniqueCategories: 'setUniqueCategories',
  setQueriedMovies: 'setQueriedMovies',
  setQueriedMoviesError: 'setQueriedMoviesError',
  setQueriedMoviesSuccess: 'setQueriedMoviesSuccess',
  setFavoriteMovie: 'setFavoriteMovie',
  setFavoriteMovieError: 'setFavoriteMovieError',
  setFavoriteMovieSuccess: 'setFavoriteMovieSuccess',
};

export type Action = {
  type: string;
  payload: [];
};

export const Context = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: InitialStateType, action: Action): InitialStateType => {
  switch (action.type) {
    case actions.setMovies:
      return {...state, loading: true};
    case actions.setMoviesError:
      return {...state, loading: false, error: true};
    case actions.setMoviesSuccess:
      return {...state, movies: action.payload, loading: false, error: false};
    case actions.setQueriedMovies:
      return {...state, loading: true};
    case actions.setQueriedMoviesError:
      return {...state, loading: false, error: true};
    case actions.setQueriedMoviesSuccess:
      return {
        ...state,
        queriedMovies: action.payload,
        loading: false,
        error: false,
      };
    case actions.setFavoriteMovie:
      return {...state, loading: true};
    case actions.setFavoriteMovieError:
      return {...state, loading: false, error: true};
    case actions.setFavoriteMovieSuccess:
      return {
        ...state,
        favoriteMovies: action.payload,
        loading: false,
        error: false,
      };
    case actions.setUniqueCategories:
      return {...state, categories: action.payload};
    default:
      return state;
  }
};

const ContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

export default ContextProvider;
