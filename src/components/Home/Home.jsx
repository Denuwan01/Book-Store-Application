import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <motion.div 
          className="home-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Web Designer', 'Problem Solver'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="tagline">Turning ideas into reality through code</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
        <motion.div 
          className="home-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            {/* Replace with your image URL */}
            <img src="https://via.placeholder.com/400" alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;