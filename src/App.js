import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const movieTitles = [
  'Batman Begins',
  'Batman Dark Knight',
  'Batman Rises',
  'John Wick'
];

const moviePosters = [
  'https://dummyimage.com/150x200/ff7373/fff',
  'https://dummyimage.com/150x200/ffc952/fff',
  'https://dummyimage.com/150x200/47b8e0/fff',
  'https://dummyimage.com/150x200/34314c/fff'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard title={movieTitles[0]} poster={moviePosters[0]} />
        <MovieCard title={movieTitles[1]} poster={moviePosters[1]} />
        <MovieCard title={movieTitles[2]} poster={moviePosters[2]} />
        <MovieCard title={movieTitles[3]} poster={moviePosters[3]} />
      </div>
    );
  }
}

export default App;
