import React from "react";
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Navbar = () => {
  return (
    <nav className="flex">
      <Link to="/">DashBoard</Link>
      <Link to="/stocks">Stocks</Link>
    </nav>
  )
}

export default Navbar;