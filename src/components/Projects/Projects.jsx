import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with payment integration',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Express', 'Stripe'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Project 3',
      description: 'Real-time chat application using WebSocket',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Socket.io', 'Node.js'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;