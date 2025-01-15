import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        {/* Footer navigation */}
        <ul className='footer-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/meet-the-sisters">Sisterhood</Link></li>
          <li><Link to="/fall2024">Recruitment</Link></li>
          <li><Link to="/light-the-night">Philanthropy</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Logo and title */}
        <div className='footer-brand'>
          <img src={logo} alt="Logo" className='footer-logo' />
          <h1>Phi Sigma Rho</h1>
        </div>

        {/* Social icons */}
        <div className='footer-social'>
          <a href="https://www.google.com/maps?cid=15744642477911126665" target="_blank" rel="noopener noreferrer">
            <img src={map} alt="Map" className='social-logo' />
          </a>
          <a href="https://www.instagram.com/calphirho?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className='social-logo' />
          </a>
          <a href="https://www.facebook.com/calphisigmarho" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className='social-logo' />
          </a>
        </div>

        {/* Copyright */}
        <p>&copy; 2024 Phi Sigma Rho - Alpha Theta Chapter</p>
      </div>
    </footer>
  );
};

export default Footer;
