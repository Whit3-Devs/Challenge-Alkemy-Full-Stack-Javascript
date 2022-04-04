import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to='/' className='nav-link' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink exact to='/operations' className='nav-link' activeClassName='active'>
            Operations
        </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar