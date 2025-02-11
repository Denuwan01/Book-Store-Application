import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <div className="nav-logo">
          <Link to="home" smooth={true} duration={500}>Portfolio</Link>
        </div>
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link>
          <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link>
          <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link>
          <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;