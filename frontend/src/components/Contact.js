import '../components/styles/Contact.css';

function Contact() {
  return (
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
  );
}

export default Contact;