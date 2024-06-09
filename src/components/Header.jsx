

import React, { useState } from 'react';
import logo from '../pet-logo.png';
import searchlogo from '../searchlogo.png';
import { Link, useLocation } from 'react-router-dom';

function Header({ query, handleSearchChange, handleKeyDown, handleSearchSubmit }) {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header id='header'> 
      <button id="nav-toggle" onClick={toggleNav}>☰</button>
      <nav>
        <ul className={navVisible ? 'show' : ''}>
          <button className="closebtn" onClick={toggleNav}>×</button>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          </li>
          <li>
            <Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>ABOUT US</Link>
          </li>
          <li>
            <Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="logo" id='imgheader' />
      <div className={`search ${searchVisible ? 'show' : ''}`}>
      <form onSubmit={handleSearchSubmit}>
          <span id="searchIcon" onClick={toggleSearch}>🔍</span>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search for animals... 🔍" 
            value={query} 
            onChange={handleSearchChange} 
            onKeyDown={handleKeyDown} 
          />
        </form>

        {/* <div onSubmit={handleSearchSubmit}>🔍
          <input 
            type="text" 
                      id="searchInput" 
            className={searchVisible ? 'show' : ''} 
            placeholder="Search for animals... 🔍" 
            value={query} 
            onChange={handleSearchChange} 
            onKeyDown={handleKeyDown} 
            onClick={toggleSearch}
          />
         
        </div> */}

      </div>
    </header>
  );
}

export default Header;
