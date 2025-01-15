import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Dropdown.css';

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown-menu">
      {items.map((item, index) => (
        <Link key={index} to={item.href} className="dropdown-item">
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
