import '../components/styles/Contact.css';
import instagramIcon from '../assets/icons/instagram-sunsick.png';
import xIcon from '../assets/icons/x-sunsick.png';
import youtubeIcon from '../assets/icons/youtube-sunsick.png';
import facebookIcon from '../assets/icons/facebook-sunsick.png';
import tiktokIcon from '../assets/icons/tiktok-sunsick.png';

function Contact() {
  return (
    <section className="Contact-section" id="contact">
      <h2>Find Us</h2>
      <p>Follow us on social media for our latest locations and events!</p>
      <div className="social-links">
        <a href="https://instagram.com/ssmoontruck" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://x.com/ssmoontruck" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" className="social-icon" />
        </a>
        <a href="https://youtube.com/@sunsickmoontruck" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="social-icon" />
        </a>
        <a href="https://facebook.com/ssmoontruck" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://tiktok.com/@sunsickmoontruck" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" className="social-icon" />
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
  );
}

export default Contact;
