import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
        <a href="#" aria-label="GitHub" style={{ pointerEvents: 'none' }}>
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/lillian-philips" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:lilliangrace.philips20@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <p className="footer-text">
          Designed & Built by <span>Lillian Philips</span> 
          <span style={{ margin: '0 10px' }}>|</span> 
          © {currentYear} All Rights Reserved
        </p>
        
        <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          Made with <FaHeart style={{ color: '#ff6b6b', margin: '0 5px' }} /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
