import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => setDropdown(menu);
  const handleMouseLeave = () => setDropdown(null);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-item">Home</Link>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/about-us" className="navbar-item-link">About Us</Link>
          {dropdown === 'about' && (
            <Dropdown
              items={[
                { label: 'Involvement', href: '/involvement' },
                { label: 'FAQs', href: '/faqs' },
              ]}
            />
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('sisterhood')}
          onMouseLeave={handleMouseLeave}
        >
          Sisterhood
          {dropdown === 'sisterhood' && (
            <Dropdown
              items={[
                { label: 'Meet the Sisters', href: '/meet-the-sisters' },
                //{ label: 'Executive Board', href: '/executive-board' },
              ]}
            />
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('recruitment')}
          onMouseLeave={handleMouseLeave}
        >
          Recruitment
          {dropdown === 'recruitment' && (
            <Dropdown
              items={[
                { label: 'Fall 2024', href: '/fall2024' },
                { label: 'Accepted Majors', href: '/accepted-majors' },
              ]}
            />
          )}
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => handleMouseEnter('philanthropy')}
          onMouseLeave={handleMouseLeave}
        >
          Philanthropy
          {dropdown === 'philanthropy' && (
            <Dropdown
              items={[
                { label: 'Light the Night', href: '/light-the-night' },
                { label: 'Berkeley Project', href: '/berkeley-project' },
                { label: 'Berkeley Youth Alternatives', href: '/berkeley-youth-alternatives' },
              ]}
            />
          )}
        </li>
        <li><Link to="/events" className="navbar-item">Events</Link></li>
        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://www.google.com/maps?cid=15744642477911126665" target="_blank" rel="noopener noreferrer">
          <img src={map} alt="Map" />
        </a>
        <a href="https://www.instagram.com/calphirho?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/calphisigmarho" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
