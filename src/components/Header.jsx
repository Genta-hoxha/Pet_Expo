
import React, {useState} from 'react';
import logo from '../pet-logo.png';
import searchlogo from '../searchlogo.png';
import likedlogo from '../Love.png'
import { Link, useLocation } from 'react-router-dom';

function Header({ query, handleSearchChange, handleKeyDown, handleSearchSubmit, handleLiked }) {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };
  return (

  <header id='header'> 
  <button id="nav-toggle" onClick={toggleNav}>
☰

  </button>
  <nav>
  <ul className={navVisible ? 'show' : ''}>
        <button className="closebtn" onClick={toggleNav}>
          ×
        </button>
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
  <div className="search">
  <input 
      type="text" 
      id="searchInput" 
      placeholder="Search for images" 
      value={query} 
      onChange={handleSearchChange} 
      onKeyDown={handleKeyDown}
      className={isSearchExpanded ? 'expanded' : ''} 
    />
       <button id="searchButton" onClick={handleSearchSubmit}>
      <img
        src={searchlogo}
        alt="icon"
        style={{ width: "70px", height: "70px" }}
      />
    </button>
     <button id="likedButton" onClick={handleLiked}>
      <img
        src={likedlogo}
        alt="icon"
        style={{ width: "30px", height: "30px" }}
      />
    </button>
    </div>
     
   

</header>












    //    <header id='header'> 
    //     <div>
    //   <img src={logo} alt="logo" id='imgheader' />
    //      <input 
    //       type="text" 
    //       id="searchInput" 
    //       placeholder="Search for images" 
    //       value={query} 
    //       onChange={handleSearchChange} 
    //       onKeyDown={handleKeyDown}
    //     />
    //     <button id="searchButton" onClick={handleSearchSubmit}>
    //       <img
    //         src={searchlogo}
    //         alt="icon"
    //         style={{ width: "70px", height: "70px" }}
    //       />
    //     </button>
    //     <button id="likedButton" onClick={handleLiked}>
    //       <img
    //         src={likedlogo}
    //         alt="icon"
    //         style={{ width: "30px", height: "30px" }}
    //       />
    //     </button>
    //   </div>
    //   <button id="nav-toggle" onClick={toggleNav}>
    //     ☰
    //   </button>
    //   <nav>
    //   <ul className={navVisible ? 'show' : ''}>
    //       <li>
    //         <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
    //       </li>
    //       <li>
    //         <Link to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>ABOUT US</Link>
    //       </li>
    //       <li>
    //         <Link to="/contactus" className={location.pathname === '/contactus' ? 'active' : ''}>CONTACT US</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  
  );
}

export default Header;
