import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-info">
        <p>© 2024 Clean Store - Todos los derechos reservados.</p>
        <p>Contacto: contacto@cleanstore.com</p>
      </div>
      <div className="footer-socials">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
