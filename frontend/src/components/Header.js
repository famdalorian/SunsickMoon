import logo from '../assets/Logo.svg';
import '../components/styles/Header.css';

function Header() {
  return (
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
  );
}

export default Header;