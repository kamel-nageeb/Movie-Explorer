import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, PlayCircle } from 'lucide-react';
import './MovieCard.css';

function readFavorite(movieId) {
  try {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favs.some((f) => f.id === movieId);
  } catch {
    return false;
  }
}

function MovieCard({ movie, onFavoriteToggle }) {
  const [isFavorite, setIsFavorite] = useState(() => readFavorite(movie.id));

  function handleFavoriteClick(e) {
    e.preventDefault(); 
    
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const found = favs.some(f => f.id === movie.id);

    if (found) {
      favs = favs.filter(f => f.id !== movie.id);
      setIsFavorite(false);
    } else {
      favs.push(movie);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
    
    if (onFavoriteToggle) {
      onFavoriteToggle();
    }
  }

  return (
    <div className="movie-card">
      <div className="card-image-wrapper">
        <img src={movie.poster_url} alt={movie.title} />
        
        <div className="card-overlay">
          <button 
            className={`fav-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}>

            <Heart fill={isFavorite ? "currentColor" : "none"} size={20} />
          </button>
          
          <Link to={`/movie/${movie.id}`} className="play-btn">
            <PlayCircle size={48} />
          </Link>

          <div className="card-meta">
            <span className="rating">
              <Star size={14} fill="#ffad1f" color="#ffad1f" />
              {movie.rating}
            </span>
            <span className="year">{movie.year}</span>
          </div>
        </div>
      </div>
      
      <div className="card-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre && Array.isArray(movie.genre) ? movie.genre.slice(0, 2).join(' • ') : ''}</p>
      </div>
    </div>
  );
}

export default MovieCard;