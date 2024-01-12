

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="logo">Stock Market</Link>
      <div className="navigation">
      <Link to="/companyDetails" className="nav-link">CompanyDetails</Link>
        <Link to="/query" className="nav-link">Query</Link>
        <Link to="/allquery" className="nav-link">Resolved Queries</Link>
        <Link to="/book" className="nav-link">Purchased Stock</Link>
      </div>
    </div>
  );
};

export default Header;

