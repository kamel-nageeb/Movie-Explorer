import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moviesData from '../films.json';
import MovieCard from '../Components/MovieCard'; 
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(m => m.id === parseInt(id));

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (movie) {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const found = favorites.some(fav => fav.id === movie.id);
      setIsFavorite(found);
    }

    window.scrollTo(0, 0);
  }, [id, movie]);


  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== movie.id);
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };


  if (!movie) {
    return (
      <div className="error-container">
        <h2>Movie Not Found!</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }


  const relatedMovies = moviesData
    .filter(m => m.genre.some(g => movie.genre.includes(g)) && m.id !== movie.id)
    .slice(0, 5);

  return (
    <div className="movie-details-page">
      <nav className="breadcrumbs">
        <Link to="/">Home</Link>
        <span className="separator"> &gt; </span>
        <Link to="/movies">Movies</Link>
        <span className="separator"> &gt; </span>
        <span className="current-movie">{movie.title}</span>
      </nav>


      <div className="main-details-content">
    
        <div className="left-details-side">
          <div className="movie-poster-large">
            <img src={movie.poster_url} alt={movie.title} />
          </div>
          <div className="action-buttons">
            <button 
              className={isFavorite ? "btn-favorite active" : "btn-favorite"} 
              onClick={toggleFavorite}
            >
              {isFavorite ? "Remove from Favorites" : " Add to Favorites"}
            </button>
            <button className="btn-back-home" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>


        <div className="right-details-side">
          <h1 className="movie-details-title">{movie.title}</h1>
          
          <div className="movie-meta-info">
            <span className="year">{movie.year}</span>
            <span className="dot">•</span>
            <span className="genres">{movie.genre.join(', ')}</span>
            <span className="dot">•</span>
            <span className="duration">
              {Math.floor(movie.duration_minutes / 60)}h {movie.duration_minutes % 60}m
            </span>
          </div>

          <div className="imdb-rating-badge">
            <span className="star">★</span>
            <span className="score">{movie.imdb_score}</span>
            <span className="out-of">/10</span>
            <div className="imdb-tag">IMDB RATING</div>
          </div>

          <div className="info-block">
            <h3>Director</h3>
            <p>{movie.director}</p>
          </div>

          <div className="info-block">
            <h3>Cast</h3>
            <p>{movie.cast.join(', ')}</p>
          </div>

          <div className="plot-summary">
            <h3>Plot Summary</h3>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </div>


      <section className="home-section">
        <div className="section-header">
          <h2 className="section-title">Related Movies</h2>
          <Link to="/movies" className="view-more">View All</Link>
        </div>
  
        <div className="movie-grid">
          {relatedMovies.map(m => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
</section>
    </div>
  );
}

export default MovieDetails;