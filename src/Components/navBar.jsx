import React from 'react';

import './navbar.css'

const NavBar = () => {
    return ( 
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light mb-5 ">
  <div class="container-fluid m-1 p-1 ">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-2">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item ms-2 me-2">
          <a class="nav-link" href="#">About Us</a>
        </li>

        <li class="nav-item ms-2 me-2">
          <a class="nav-link" href="#">Services</a>
        </li>

        <li class="nav-item ms-2 me-2">
          <a class="nav-link" href="/futurePronet">FuturePro Net</a>
        </li>

        {/* <li class="nav-item dropdown ms-2 me-2">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </React.Fragment>
     );
}
 
export default NavBar;