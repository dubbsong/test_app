import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movieData: [
          {
            title: 'Batman Begins',
            poster: 'https://dummyimage.com/150x200/ff7373/fff'
          },
          {
            title: 'Batman Dark Knight',
            poster: 'https://dummyimage.com/150x200/ffc952/fff'
          },
          {
            title: 'Batman Rises',
            poster: 'https://dummyimage.com/150x200/47b8e0/fff'
          },
          {
            title: 'John Wick',
            poster: 'https://dummyimage.com/150x200/ff7373/fff'
          }
        ]
      });
    }, 2000);
  }

  _renderMovies() {
    const movies = this.state.movieData.map((movie, index) => {
      return (
        <MovieCard key={index} poster={movie.poster} title={movie.title} />
      );
    });
    return movies;
  }

  render() {
    return (
      <div className={this.state.movieData ? 'App' : 'App__Loading'}>
        {this.state.movieData ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;