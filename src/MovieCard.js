import React from 'react';
import './MovieCard.css';
import PropTypes from 'prop-types';

function MovieCard({ poster, title }) {
  return (
    <div className="Movie__Card">
      <MoviePoster poster={poster} />
      <h2>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h2>
    </div>
  );
}

function MoviePoster({ poster }) {
  return <img src={poster} alt="" />;
}

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default MovieCard;
