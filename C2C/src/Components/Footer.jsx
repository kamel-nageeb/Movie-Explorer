import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-section">
          <div className="footer-logo">
            <span>Movie Explorer</span>
          </div>

          <p className="footer-desc">
            The ultimate destination for movie enthusiasts. Discover, track, and share your favorite films from around the globe.
          </p>
        </div>

        <div className="footer-section">
          <h4>Discover</h4>
          <ul>
            <li><Link to="#">Trending Now</Link></li>
            <li><Link to="#">New Releases</Link></li>
            <li><Link to="#">Top Rated</Link></li>
            <li><Link to="#">Coming Soon</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><Link to="#">Reviews</Link></li>
            <li><Link to="#">Discussions</Link></li>
            <li><Link to="#">Watch Parties</Link></li>
            <li><Link to="#">Awards</Link></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Get the latest movie updates delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email address" required />
            <button type="submit" className="btn btn-primary btn-sm">Join</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Movie Explorer. All cinematic rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
