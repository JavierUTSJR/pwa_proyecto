import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Clean Store</div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#categories">Categorías</a></li>
        <li><a href="#featured">Destacados</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="navbar-cart">
        <i className="fas fa-shopping-cart"></i> Carrito
      </div>
    </nav>
  );
}

export default Navbar;
