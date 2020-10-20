import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex">
    <div className="nav-container">
      <Link to="/">DashBoard</Link>
      <Link to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;
