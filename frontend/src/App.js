import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;