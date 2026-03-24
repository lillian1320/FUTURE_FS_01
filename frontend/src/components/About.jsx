import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technicalSkills = [
    'Java', 'JavaScript', 'HTML', 'CSS', 'MySQL',
    'Data Structures', 'Algorithms', 'Git', 'VS Code'
  ];

  const tools = [
    'VS Code', 'GitHub', 'MySQL', 'Eclipse', 
    'NetBeans', 'IntelliJ IDEA', 'Postman'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>01.</span> About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-text">
            <motion.p variants={itemVariants}>
              Hello! My name is <span style={{ color: '#64ffda' }}>Lillian Philips</span> and I'm a 
              motivated BCA student at Dhanwantri Academy for Management Studies, Bangalore. 
              I'm passionate about full-stack web development and building innovative solutions.
            </motion.p>
            <motion.p variants={itemVariants}>
              I've hands-on experience in web development using Java, JavaScript, HTML, CSS, and MySQL. 
              During my internship at ParvaM Consul-tech Pvt. Ltd, I gained practical experience in 
              configuring, debugging, and testing full-stack applications, including authentication systems.
            </motion.p>
            <motion.p variants={itemVariants}>
              Here are a few technologies I've been working with recently:
            </motion.p>

            <motion.div className="skills-container" variants={itemVariants}>
              <div className="skills-category">
                <h4>Programming Languages</h4>
                <div className="skills-list">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h4>Tools & Platforms</h4>
                <div className="skills-list">
                  {tools.map((tool, index) => (
                    <span key={index} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                alt="About Lillian Philips"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

