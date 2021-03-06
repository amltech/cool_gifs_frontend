import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(false);
    
    return (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink to="/" className="navbar-item">Cool GIfs</NavLink>
      <a role="button" className="navbar-burger burger" onClick={() => setActive(!active)} aria-label="menu" aria-expanded="false" data-target="main-navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="main-navbar" className={ active ? 'navbar-menu is-active': 'navbar-menu'} >
      <div className="navbar-start">
        <NavLink to="/gifs" className="navbar-item" activeClassName="is-active" onClick={() => setActive(false)}>
          GIFs
        </NavLink>
        <NavLink to="/upload" className="navbar-item" activeClassName="is-active" onClick={() => setActive(false)}>
          Upload
        </NavLink>
      </div>
    </div>
  </nav>
  );
}

export default Header;
