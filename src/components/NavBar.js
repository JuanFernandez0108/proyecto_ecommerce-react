import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <span className="navbar-brand" href="/"><Link to="/">Oli Oli - PetStore</Link></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
          <button className="nav-link" href="/">Perros</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="/">Gatos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" href="/">Articulos</button>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
    </>
  )
}

export default NavBar;