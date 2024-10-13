import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <header className='Header-container'>
      <nav>
        <div className="link-logo-container-mobile">
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/rooms" onClick={toggleMenu}>Rooms</Link></li>
            <li><Link to="/About" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services & Amenities</Link></li>
          </ul>
        <div className="logoContainer">
          <p><Link to="/">HavenHub</Link></p>
        </div>
        </div>
      
        <div className="signup">
          <Link to="/SignIn_Up">Sign Up</Link>
        </div>
        <div className="desktop-header-container">
        <div className="logoContainer-desktop">
          <p><Link to="/">HavenHub</Link></p>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/rooms" onClick={toggleMenu}>Rooms</Link></li>
            <li><Link to="/About" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li id="signup-desktop-link"><Link to ="/SignIn_Up" onClick={toggleMenu}>Sign Up</Link></li>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;