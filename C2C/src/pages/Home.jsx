import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import moviesData from '../films.json';
import MovieCard from '../Components/MovieCard';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const goToFavorites = () => navigate('/favourites');

  const goToInceptionDetails = () => navigate('/movie/1');

  const trendingMovies = moviesData.slice(0, 5);
  const popularMovies = moviesData
    .filter(movie => movie.imdb_score >= 8.5)
    .slice(0, 5);

  const actionMovies = moviesData
    .filter(movie => movie.genre.includes("Action"))
    .slice(0, 5);

  const dramaMovies = moviesData
    .filter(movie => movie.genre.includes("Drama"))
    .slice(0, 5);

  return (
    <div className="home-page">
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">INCEPTION</h1>
          <p className="hero-description">
            A thief who steals corporate secrets through the use of dream-sharing technology 
            is given the inverse task of planting an idea into the mind of a C.E.O
          </p>
          <div className="hero-buttons">
            <button className="btn-details" onClick={goToInceptionDetails}>
              View Details
            </button>
          </div>
        </div>
      </section>

      <div className="home-content-wrapper">
        
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Trending Now</h2>
            <Link to="/movies" className="view-more">View More</Link>
          </div>
          <div className="movie-grid">
            {trendingMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>

        
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Popular on Movie Explorer</h2>
            <Link to="/movies" className="view-more">View More</Link>
          </div>
          <div className="movie-grid">
            {popularMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>

        
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Action & Sci-Fi</h2>
            <Link to="/movies" className="view-more">View More</Link>
          </div>
          <div className="movie-grid">
            {actionMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>

        
        <section className="home-section">
          <div className="section-header">
            <h2 className="section-title">Drama</h2>
            <Link to="/movies" className="view-more">View More</Link>
          </div>
          <div className="movie-grid">
            {dramaMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;