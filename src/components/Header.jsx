import React from 'react'
import logo from '../pet-logo.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
    
    <header id='header'> 
        <img src={logo} />
        {/* <div className='search'>
        <input type="text" id="searchInput" placeholder="Search for images" />
      <button id="searchButton" >Search</button></div> */}
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
  )
}

export default Header;  


