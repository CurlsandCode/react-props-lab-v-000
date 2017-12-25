// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
          <h2>{this.props.speed}</h2>
            <h2>{this.props.hasRockets}</h2>
              <h2>{this.props.colors}</h2>
      </div>
    );
  }
}
const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
 
ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    genres={jurassicWorldGenres} 
  />,
  document.getElementById('root')
);