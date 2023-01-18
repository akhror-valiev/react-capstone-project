import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import MovieList from '../MovieList.js/MovieList';
import movieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      dispatch(addMovies(response.data));
      console.log('response from API', response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img" />
      <MovieList />
    </div>
  );
};

export default Home;
