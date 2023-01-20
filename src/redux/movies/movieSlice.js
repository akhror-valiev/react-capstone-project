import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieText = 'Tech';
  const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
  return response.data;
  // console.log('response from API', response);
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriesText = 'Friends';
  const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
  return response.data;
  // console.log('response from API', response);
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
      // eslint-disable-next-line no-param-reassign
      state.selectedDetailPage = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, shows: payload };
    },
    [fetchAsyncDetailPage.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully');
      return { ...state, detailPage: payload };
    },
  },
});

export const { removeSelectedDetailPage } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetailPage = (state) => state.movies.detailPage;
export default movieSlice.reducer;
