import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary navheader">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:"white", fontFamily:'Courier New', letterSpacing:'-0.6px'}} href="/">CAVE A VIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="/wines">Wine Selections</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="/register">Register/Login</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" className='btn1' type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}
export default Header