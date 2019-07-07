import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies() {
    const movies = this.state.movieData.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title_english}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  }

  async _getMovies() {
    const movieData = await this._callApi();

    this.setState({
      movieData: movieData
    });
  }

  _callApi() {
    return fetch(
      'https://yts.lt/api/v2/list_movies.json?sort_by=download_count'
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
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
