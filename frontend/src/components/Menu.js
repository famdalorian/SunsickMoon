import { useEffect } from 'react';
import '../components/styles/Menu.css';
import crabImage from '../assets/crab.jpg';
import scallopImage from '../assets/scallop.jpg';
import desertImage from '../assets/desert.jpg';

function Menu() {
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    menuItems.forEach((item) => {
      observer.observe(item);
      setTimeout(() => {
        if (!item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      }, 1000);
    });
    return () => {
      menuItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="Menu-section" id="menu">
      <h2>Menu Highlights</h2>
      <div className="menu-items">
        <div className="menu-item">
          <div className="text-content">
            <h3>Crab Linguine</h3>
            <p>Succulent crab, lime, chili, garlic, and a white wine sauce.</p>
          </div>
          <div className="menu-image-wrapper">
            <img
              src={crabImage}
              alt="Crab Linguine"
              className="menu-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="menu-item">
          <div className="text-content">
            <h3>Seared Scallops</h3>
            <p>Pan-seared scallops with cauliflower purée and microgreens.</p>
          </div>
          <div className="menu-image-wrapper">
            <img
              src={scallopImage}
              alt="Seared Scallops"
              className="menu-image"
              loading="lazy"
            />
          </div>
        </div>
        <div className="menu-item">
          <div className="text-content">
            <h3>Deconstructed Pavlova</h3>
            <p>Miniature meringue shards, passionfruit curd, and fresh berries.</p>
          </div>
          <div className="menu-image-wrapper">
            <img
              src={desertImage}
              alt="Deconstructed Pavlova"
              className="menu-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <a href="#full-menu" className="menu-link">View Full Menu</a>
    </section>
  );
}

export default Menu;