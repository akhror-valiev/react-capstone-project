import React from 'react';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../redux/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = '';
  let renderShows = '';

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie) => (
      <MovieCard key={uuid()} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  renderShows = shows.Response === 'True' ? (
    shows.Search.map((show) => (
      <MovieCard key={uuid()} data={show} />
    ))
  ) : (
    <div className="show-error">
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
