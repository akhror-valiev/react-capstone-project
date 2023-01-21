import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';
import MovieList from '../MovieList.js/MovieList';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Tech';
  const showText = 'Friends';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img" />
      <MovieList />
    </div>
  );
};

export default Home;
