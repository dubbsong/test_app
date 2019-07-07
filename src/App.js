import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}

export default App;
