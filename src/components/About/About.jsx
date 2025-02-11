import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = {
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> }
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <FaNodeJs /> }
    ],
    Database: [
      { name: 'MongoDB', icon: <FaDatabase /> },
      { name: 'SQL', icon: <FaDatabase /> }
    ],
    Tools: [
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaGithub /> }
    ]
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I am a passionate Full Stack Developer with a strong foundation in web technologies.
            My journey in software development has equipped me with the skills to create efficient,
            scalable, and user-friendly applications. I love learning new technologies and solving
            complex problems through innovative solutions.
          </p>
          
          <div className="skills-container">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skills-grid">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;