import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const movieData = [
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
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movieData.map((movie, index) => {
          return (
            <MovieCard key={index} poster={movie.poster} title={movie.title} />
          );
        })}
      </div>
    );
  }
}

export default App;
