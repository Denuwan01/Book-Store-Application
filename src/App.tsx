import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ShopPage from './components/shop/ShopPage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navigation cartItems={3} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;