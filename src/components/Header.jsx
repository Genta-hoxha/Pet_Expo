
import React from 'react';
import logo from '../pet-logo.png';
import searchlogo from '../searchlogo.png';
import { Link } from 'react-router-dom';

function Header({ query, handleSearchChange, handleKeyDown, handleSearchSubmit }) {
  return (
    <header id='header'> 
      <img src={logo} alt="logo" />
      <div className='search'>
        <input 
          type="text" 
          id="searchInput" 
          placeholder="Search for images" 
          value={query} 
          onChange={handleSearchChange} 
          onKeyDown={handleKeyDown}
        />
        <button id="searchButton" onClick={handleSearchSubmit}>
          <img
            src={searchlogo}
            alt="icon"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
