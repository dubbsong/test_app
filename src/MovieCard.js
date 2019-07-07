import React from 'react';
import './MovieCard.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function MovieCard({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie__Card">
      <div className="Movie__Column">
        <MoviePoster poster={poster} />
      </div>
      <div className="Movie__Column">
        <h2>{title}</h2>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>

        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="5"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
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
