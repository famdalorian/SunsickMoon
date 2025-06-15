import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../components/styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-logo">
          <a href="#home" onClick={closeMenu}>
            <img src={logo} alt="SunSick Moon Logo" className="nav-logo" />
          </a>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          role="button"
          tabIndex="0"
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {isMenuOpen && (
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          &times;
        </button>
      )}

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </>
  );
}

export default Navbar;
