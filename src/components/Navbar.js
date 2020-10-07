import React from "react";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <nav className="flex">
      <Link to="/">Home</Link>
      <Link to="/dashboard">DashBoard</Link>
      <Link to="/detail">Detail</Link>
    </nav>
  )
}

export default Navbar;