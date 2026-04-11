import React, { useState } from 'react';
import MovieCard from '../Components/MovieCard';
import './Favourites.css';

function readFavoritesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch {
    return [];
  }
}

function Favourites() {
  const [favMovies, setFavMovies] = useState(() => readFavoritesFromStorage());

  const loadFavorites = () => {
    setFavMovies(readFavoritesFromStorage());
  };

  return (
    <div className="favourites-page">
      <div className="favourites-container">
        <header className="favourites-header">
          <div className="header-left">
            <h1>My Favorites</h1>
          </div>
        </header>

        {favMovies.length > 0 ? (
          <div className="movie-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '55px',
            marginTop: '30px'
          }}>
            {favMovies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onFavoriteToggle={loadFavorites} 
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Your favorites list is empty</h3>
            <p>Explore our vast collection and add movies you love to see them here.</p>
            <button className="btn-explore" onClick={() => window.location.href = '/movies'}>
              Explore Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;