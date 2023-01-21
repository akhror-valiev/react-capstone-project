import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
  const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=movie`);
  return response.data;
  // console.log('response from API', response);
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
  const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return response.data;
});

export const fetchAsyncDetailPage = createAsyncThunk('movies/fetchAsyncDetailPage', async (id) => {
  const response = await movieApi
    .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
  // console.log('response from API', response);
});

const initialState = {
  movies: {},
  shows: {},
  detailPage: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedDetailPage: (state) => {
      state.selectedDetailPage = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => ({ ...state, movies: payload }),
    // console.log('Fetched Successfully');

    [fetchAsyncMovies.rejected]: () => {
      // console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => ({ ...state, shows: payload }),
    // console.log('Fetched Successfully');

    [fetchAsyncDetailPage.fulfilled]: (state, { payload }) => ({ ...state, detailPage: payload })
    // console.log('Fetched Successfully');

    ,
  },
});

export const { removeSelectedDetailPage } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetailPage = (state) => state.movies.detailPage;
export default movieSlice.reducer;
