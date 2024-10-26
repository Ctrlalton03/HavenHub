import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';
import { Button } from "@/Components/ui/button";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth ();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
      setIsAuthenticated(false);
    })
    .catch((error: any)=> {
      console.error('error signing out: ', error);
    });
    // Add any logout logic here
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

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

        {/* Auth buttons container mobile */}
        <div className="auth-buttons">
          {!isAuthenticated ? (
            <>
              <Button><Link to="/signUpForm" className="login-link">Login</Link></Button>
              <Button><Link to="/SignUpForm" className="signup-link">Sign Up</Link></Button>
            </>
          ) : (
            <div className="auth-actions">
              <Button><Link to="/dashboard">Profile</Link></Button>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
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
            {!isAuthenticated ? (
              <>
                <li id="signup-desktop-link">
                  <Link to="/SignUpForm" onClick={toggleMenu}>Login</Link>
                </li>
                <li id="signup-desktop-link">
                  <Link to="/SignUpForm" onClick={toggleMenu}>Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/dashboard" onClick={toggleMenu}><Button>Profile</Button></Link></li>
                <li><Button onClick={handleLogout}>Logout</Button></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;