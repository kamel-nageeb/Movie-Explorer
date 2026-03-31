import React from 'react';
import { useLocation } from 'react-router-dom';
import moviesData from '../films.json';
import MovieCard from '../Components/MovieCard';
import './Movies.css'; 

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const results = moviesData.filter(movie => 
    movie.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="movies-page" style={{ paddingTop: '100px' }}>
      <header className="movies-header">
        <h1>Search Results for: "{query}"</h1>
      </header>

      {results.length > 0 ? (
        <div className="movie-grid">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no-results" style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3>No movies found!</h3>
        </div>
      )}
    </div>
  );
}

export default SearchResults;