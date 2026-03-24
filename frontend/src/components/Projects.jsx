import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React.js featuring smooth animations, contact form with backend integration, and modern dark UI design.',
      tech: ['React', 'Framer Motion', 'Node.js', 'MongoDB', 'CSS3'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'Student Management System',
      description: 'A web application for managing student records, attendance, and grades with CRUD operations and admin dashboard.',
      tech: ['Java', 'JDBC', 'MySQL', 'HTML', 'CSS'],
      github: '#',\n      demo: '#',\n      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop'
    },
    {
      title: 'Online Shopping Cart',
      description: 'A basic e-commerce application with product catalog, shopping cart, authentication, and order management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: '#',\n      demo: '#',\n      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application displaying current weather and forecasts using OpenWeather API.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: '#',\n      demo: '#',\n      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop'
    },
    {
      title: 'Todo List Application',
      description: 'A task management app with add, edit, delete tasks and local storage persistence.',
      tech: ['React', 'LocalStorage', 'CSS3'],
      github: '#',\n      demo: '#',\n      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop'
    },
    {
      title: 'Banking Application Prototype',
      description: 'A prototype banking app with balance inquiry, transaction history, and PIN-based authentication.',
      tech: ['Java', 'Swing', 'MySQL'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span>02.</span> Projects
        </motion.h2>
        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {projects.map((project, index) => (
            <motion.div key={index} className="project-card" variants={itemVariants}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-top">
                  <FaFolder className="folder-icon" />
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub"><FaGithub /></a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo"><FaExternalLinkAlt /></a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => <span key={techIndex}>{tech}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
