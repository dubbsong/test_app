import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="Movie__Card">
        <MoviePoster />
        <h2>All good?</h2>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return <img src="https://dummyimage.com/150x200/ff7373/fff" alt="" />;
  }
}

export default MovieCard;
