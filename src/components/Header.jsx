

import React, { useState } from 'react';
import logo from '../pet-logo.png';
import searchlogo from '../searchlogo.png';
import { Link, useLocation } from 'react-router-dom';


//NAVIGATION BAR & SEARCH FUNCTIONALITY
function Header({ query, handleSearchChange, handleKeyDown, handleSearchSubmit }) {
  const location = useLocation();  //HOOK THAT GET CURRENT LOCATION
  const [navVisible, setNavVisible] = useState(false); //STATE TO CONTROL VISIBILITY OF NAVIGATION
  const [searchVisible, setSearchVisible] = useState(false); //STATE TO CONTROL VISIBILITY OF SEARCH

  //FUNCT. THAT TOGGLE NAVIGATION VISIVILITY
  const toggleNav = () => setNavVisible(!navVisible);

  //FUNCT. THAT TOOGLE VISIBILITY OF SEARCH INPUT
  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <header id='header'>
       {/* Button to toggle navigation menu */}
      <button id="nav-toggle" onClick={toggleNav}>☰</button>

      {/* Navigation menu */}
      <nav>
        <ul className={navVisible ? 'show' : ''}>

            {/* Button to close navigation menu */}
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
      
        {/* Search functionality */}
      <div className={`search ${searchVisible ? 'show' : ''}`}>
        <form onSubmit={handleSearchSubmit}>
          <button id="searchIcon" onClick={toggleSearch} style={{ backgroundColor: "transparent", borderColor:"transparent"}}>
          <img src={searchlogo} alt="Search" style={{ width: "90px", height: "90px" }} />    </button>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search for animals..." 
            value={query} 
            onChange={handleSearchChange} 
            onKeyDown={handleKeyDown} 
          />
        </form>
      </div>
    </header>
  );
}

export default Header;