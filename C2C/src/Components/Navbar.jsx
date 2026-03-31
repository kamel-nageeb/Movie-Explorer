import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); 
      setSearchQuery(''); 
      setIsMobileMenuOpen(false);
    }
  }

  function toggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <button 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            {'Movie Explorer'}
          </Link>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/movies" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/favourites" onClick={() => setIsMobileMenuOpen(false)}>Favourites</Link>
        </div>

        <div className="nav-right">
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Link to="/login" className="sign-in-btn" style={{ marginRight: '10px', background: 'transparent', color: 'white', border: '1px solid white' }}>Log in</Link>
          <Link to="/signup" className="sign-in-btn">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
