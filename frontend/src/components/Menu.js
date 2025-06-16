import { useState, useEffect } from 'react';
import '../components/styles/Menu.css';
import weddingImg from '../assets/desert.jpg';
import festivalImg from '../assets/scallop.jpg';
import corporateImg from '../assets/crab.jpg';
import friesImg from '../assets/fries.png';

const menuData = [
  {
    category: 'Weddings',
    title: 'Bespoke Wedding Catering',
    description: 'From canapés to three-course elegance — we create unforgettable dining experiences for your big day.',
    image: weddingImg,
  },
  {
    category: 'Festivals',
    title: 'Festival Street Food',
    description: 'Fast, flavorful, and unforgettable — tailored to match the vibe of any festival crowd.',
    image: festivalImg,
  },
  {
    category: 'Corporate',
    title: 'Corporate Culinary Experience',
    description: 'Gourmet meals on-the-go, crafted to impress at galas, launches, and networking nights.',
    image: corporateImg,
  },
  {
    category: 'Late-Night',
    title: 'Late-Night Pop-Ups',
    description: 'Midnight munchies with class — sliders, tacos, and desserts reimagined for after-hours revelry.',
    image: friesImg,
  }
];

const categories = ['All', 'Weddings', 'Festivals', 'Corporate', 'Late-Night', 'Street Food'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const items = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    items.forEach(item => observer.observe(item));
    return () => items.forEach(item => observer.unobserve(item));
  }, [filteredMenu]);

  return (
    <section className="Menu-section" id="menu">
      <h2>Tailored Culinary Experiences</h2>
      <p className="menu-description">
        We bring restaurant-quality cuisine to events of all kinds — completely tailored to suit the setting, the guests, and the moment.
      </p>

      <div className="menu-filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredMenu.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="menu-tag">{item.category}</span>
            </div>
            <div className="menu-image-wrapper">
              <img src={item.image} alt={item.title} className="menu-image" />
            </div>
          </div>
        ))}
      </div>

      <a href="#contact" className="menu-link">Book SunSick Moon for Your Event</a>
    </section>
  );
}

export default Menu;
