import React from 'react';
import './MovieCard.css';
import PropTypes from 'prop-types';

function MovieCard({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie__Card">
      <div className="Movie__Column">
        <MoviePoster poster={poster} />
      </div>
      <div className="Movie__Column">
        <h2>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</h2>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

function MoviePoster({ poster }) {
  return <img src={poster} alt="" className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default MovieCard;
