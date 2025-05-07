import { useState } from 'react';
import logo from '../assets/logo.png';
import '../components/styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SunSick Moon Logo" className="nav-logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;