import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary navheader">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:"white", fontFamily:'Courier New', letterSpacing:'-0.6px'}} href="/">CAVE A VIN</a>
    <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={showMenu} aria-label="Toggle navigation"data-bs-toggle="collapse">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/wines">Wine Selections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/register">Register/Login</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" id="btn1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}
export default Header