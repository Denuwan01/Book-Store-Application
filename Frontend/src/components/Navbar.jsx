import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItemsCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">BookStore</NavLink>
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>

      <div className="cart-icon">
        <FaShoppingCart />
        {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
      </div>
    </nav>
  );
}

export default Navbar;