import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Resume = () => {
  const experience = [
    {
      date: 'Oct 2025 - Dec 2025',
      title: 'Full-Stack Intern',
      company: 'ParvaM Consul-tech Pvt. Ltd',
      description: [
        'Set up and configured full-stack applications from existing GitHub repositories',
        'Resolved dependency, runtime, and integration errors',
        'Debugged and optimized authentication modules (OTP and QR-based login systems)',
        'Assisted in testing web applications including shopping and banking prototypes',
        'Gained practical exposure to project structure and frontend-backend integration'
      ]
    }
  ];

  const education = [
    {
      date: '2023 - Present',
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Dhanwantri Academy for Management Studies, Bangalore',
      description: ['CGPA: 7.35', 'Currently in final year', 'Specialized in Software Development']
    },
    {
      date: '2021 - 2023',
      title: 'Pre-University Course (PUC)',
      company: 'Dhanwantari PU College',
      description: ['Percentage: 63.17%', 'Science stream']
    },
    {
      date: '2021',
      title: 'Secondary School Leaving Certificate (SSLC)',
      company: 'C.E.S. Public School',
      description: ['Percentage: 70.08%']
    }
  ];

  const courses = [
    { title: 'AWS Solutions Architecture Job Simulation', company: 'Forage', date: 'Aug 2025' },
    { title: 'DSA for Product-Based Companies', company: 'EXCELR', date: '2025' },
    { title: 'Generative AI & ChatGPT', company: 'EXCELR', date: '2025' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleDownload = () => {
    const resumeContent = `LILLIAN PHILIPS
Motivated BCA Student & Full-Stack Developer
Email: lilliangrace.philips20@gmail.com | Phone: +91 9886203084
Location: Bangalore, India

PROFESSIONAL SUMMARY
Motivated BCA student with hands-on experience in full-stack web development using Java, JavaScript, HTML, CSS, and MySQL. Completed an internship at ParvaM Consul-tech Pvt. Ltd focused on configuring, debugging, and testing full-stack applications including authentication systems.

INTERNSHIP
Full-Stack Intern | ParvaM Consul-tech Pvt. Ltd | Oct 2025 - Dec 2025
- Set up and configured full-stack applications from existing GitHub repositories
- Resolved dependency, runtime, and integration errors
- Debugged and optimized authentication modules (OTP and QR-based login systems)
- Assisted in testing web applications including shopping and banking prototypes

EDUCATION
BCA | Dhanwantri Academy for Management Studies | 2023 - Present | CGPA: 7.35
PUC | Dhanwantari PU College | 2021 - 2023 | Percentage: 63.17%
SSLC | C.E.S. Public School | 2021 | Percentage: 70.08%

TECHNICAL SKILLS
Programming Languages: Java, JavaScript
Frontend: HTML, CSS
Database: MySQL
Tools: GitHub, VS Code

COURSES
- AWS Solutions Architecture Job Simulation - Forage (Aug 2025)
- DSA for Product-Based Companies - EXCELR (2025)
- Generative AI & ChatGPT - EXCELR (2025)

LANGUAGES: English, Kannada, Hindi`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Lillian_Philips_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resume">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span>03.</span> Resume
        </motion.h2>

        <motion.div className="resume-content" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="timeline-section">
            <motion.h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }} variants={itemVariants}>
              <FaBriefcase style={{ color: '#64ffda' }} /> Internship
            </motion.h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div key={index} className="timeline-item" variants={itemVariants}>
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <ul className="timeline-description">
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.h3 style={{ marginTop: '3rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }} variants={itemVariants}>
              <FaGraduationCap style={{ color: '#64ffda' }} /> Education
            </motion.h3>
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div key={index} className="timeline-item" variants={itemVariants}>
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <ul className="timeline-description">
                    {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.h3 style={{ marginTop: '3rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }} variants={itemVariants}>
              <FaAward style={{ color: '#64ffda' }} /> Certifications
            </motion.h3>
            <div className="timeline">
              {courses.map((item, index) => (
                <motion.div key={index} className="timeline-item" variants={itemVariants}>
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-company">{item.company}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="resume-download" variants={itemVariants}>
            <div className="download-card">
              <h3>Download Resume</h3>
              <p>Get a copy of my resume with complete details about my education, internship experience, skills, and certifications.</p>
              <button className="btn-download" onClick={handleDownload}>
                <FaDownload /> Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
