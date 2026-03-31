import React, { useState } from 'react';
import moviesData from '../films.json'; 
import MovieCard from '../Components/MovieCard';
import './Movies.css'; 

function Movies() {
  const [activeGenre, setActiveGenre] = useState("All");

  const allGenres = ["All", ...new Set(moviesData.flatMap(movie => movie.genre))];

  const displayedMovies = activeGenre === "All" 
    ? moviesData 
    : moviesData.filter(movie => movie.genre.includes(activeGenre));

  return (
    <div className="movies-page">
      <header className="movies-header">
        <h1>Explore Movies</h1>
        
        <div className="filter-container">
          {allGenres.map(genre => (
            <button 
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`filter-btn ${activeGenre === genre ? 'active' : ''}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </header>

      <div className="movie-grid">
        {displayedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {displayedMovies.length === 0 && (
        <div className="no-results">
          <p>No movies found in this category.</p>
        </div>
      )}
    </div>
  );
}

export default Movies;