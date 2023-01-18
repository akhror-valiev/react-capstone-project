import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
