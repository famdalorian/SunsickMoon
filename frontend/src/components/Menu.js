import '../components/styles/Menu.css';

function Menu() {
  return (
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
  );
}

export default Menu;