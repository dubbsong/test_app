import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="Movie__Card">
        <MoviePoster poster={this.props.poster} />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return <img src={this.props.poster} alt="" />;
  }
}

export default MovieCard;
