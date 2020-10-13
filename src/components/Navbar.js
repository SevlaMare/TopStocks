import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex">
    <Link to="/">DashBoard</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
