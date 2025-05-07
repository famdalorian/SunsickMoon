import { useState } from 'react';
import logo from './assets/logo.png'; // Your SunSick Moon logo
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
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

      {/* Hero Section */}
      <header className="App-header" id="home">
        <div className="header-overlay">
          <img src={logo} className="App-logo" alt="SunSick Moon Logo" />
          <h1>SunSick Moon</h1>
          <p className="tagline">Fine Dining, Reimagined from Our Van to Your Plate</p>
          <a className="App-link" href="#menu">
            Explore Our Menu
          </a>
        </div>
        <svg className="art-deco-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,0 L100,0 L100,10 Q50,20 0,10 Z"
            fill="var(--gold)"
            opacity="0.2"
          />
        </svg>
      </header>

      {/* About Section */}
      <section className="About-section" id="about">
        <h2>About SunSick Moon</h2>
        <p>
          At SunSick Moon, we bring the elegance of fine dining to the streets. Our
          food truck serves meticulously crafted dishes using fresh, local ingredients,
          blending culinary artistry with the freedom of the open road.
        </p>
      </section>

      {/* Menu Section */}
      <section className="Menu-section" id="menu">
        <h2>Menu Highlights</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Truffle Risotto</h3>
            <p>Creamy Arborio rice with black truffle essence, topped with parmesan crisps.</p>
          </div>
          <div className="menu-item">
            <h3>Seared Scallops</h3>
            <p>Pan-seared scallops with cauliflower purée and microgreens.</p>
          </div>
          <div className="menu-item">
            <h3>Deconstructed Pavlova</h3>
            <p>Merengue shards, passionfruit curd, and fresh berries.</p>
          </div>
        </div>
        <a href="#full-menu" className="menu-link">View Full Menu</a>
      </section>

      {/* Contact Section */}
      <section className="Contact-section" id="contact">
        <h2>Find Us</h2>
        <p>Follow us on social media for our latest locations and events!</p>
        <div className="social-links">
          <a href="https://instagram.com/sunsickmoon" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://twitter.com/sunsickmoon" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <svg className="art-deco-overlay bottom-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,90 Q50,80 100,90 L100,100 L0,100 Z"
            fill="var(--gold)"
            opacity="0.2"
          />
        </svg>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>© 2025 SunSick Moon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;