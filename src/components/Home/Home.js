import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../MovieList.js/MovieList';
import movieApi from '../../common/apis/MovieApi';
import { API_KEY } from '../../common/apis/MovieApiKey';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      console.log('response from API', response);
      dispatch(addMovies(response.data));
    };
    fetchMovie();
  }, []);

  return (
    <div>
      <div className="banner-img" />
      <MovieList />
    </div>
  );
};

export default Home;
