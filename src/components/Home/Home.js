import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';
import MovieList from '../MovieList.js/MovieList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img" />
      <MovieList />
    </div>
  );
};

export default Home;
