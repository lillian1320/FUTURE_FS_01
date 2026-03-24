import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Home = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="home">
      <div className="container">
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="home-text">
            <motion.span className="greeting" variants={itemVariants}>
              Hello, I'm
            </motion.span>
            <motion.h1 className="home-title" variants={itemVariants}>
              Lillian Philips
            </motion.h1>
            <motion.h2 className="home-subtitle" variants={itemVariants}>
              BCA Student & Full-Stack Developer
            </motion.h2>
            <motion.p className="home-description" variants={itemVariants}>
              Motivated BCA student with hands-on experience in full-stack web 
              development using Java, JavaScript, HTML, CSS, and MySQL. Strong foundation 
              in Data Structures and backend–frontend integration. Seeking a software 
              development internship or entry-level role.
            </motion.p>
            
            <motion.div style={{ marginBottom: '1.5rem' }} variants={itemVariants}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8892b0', fontSize: '0.9rem' }}>
                <FaMapMarkerAlt style={{ color: '#64ffda' }} /> Bangalore, India
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8892b0', fontSize: '0.9rem' }}>
                <FaPhone style={{ color: '#64ffda' }} /> +91 9886203084
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8892b0', fontSize: '0.9rem' }}>
                <FaEnvelope style={{ color: '#64ffda' }} /> lilliangrace.philips20@gmail.com
              </p>
            </motion.div>
            
            <motion.div className="cta-buttons" variants={itemVariants}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View Projects <FaArrowRight />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact Me
              </a>
            </motion.div>
            <motion.div className="social-links" style={{ marginTop: '2rem' }} variants={itemVariants}>
              <a href="#" aria-label="GitHub" style={{ pointerEvents: 'none' }}>
                  <FaGithub size={24} />
                </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:lilliangrace.philips20@gmail.com">
                <FaEnvelope size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div className="home-image" variants={itemVariants}>
            <div className="profile-wrapper floating">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
                alt="Lillian Philips"
                className="profile-image"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

