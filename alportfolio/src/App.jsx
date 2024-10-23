import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';
import './App.css';

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setStatusMessage(''); // Clear status message when showing the form
  };

  const sanitizeInput = (value) => value.replace(/<[^>]*>?/gm, '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    emailjs.send(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Alexa',
      },
      'YOUR_USER_ID'
    )
    .then(() => {
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatusMessage('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="app">
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="logo">Alexa Leoto</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      <motion.header 
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <p className="intro-text">
            Hi, I'm Alexa Leoto.<br />
            I'm a software engineer based in NYC, passionate about building user-friendly applications and solving complex problems with clean, efficient code.
          </p>
        <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </motion.header>

      <motion.section 
        id="about" 
        className="about"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>
            I bring a blend of technical skills and people skills, shaped by my background in software engineering and hands-on customer service. With a foundation in building secure, scalable applications, I have experience in creating intuitive user interfaces and back-end systems using technologies like React, Node.js, and Python. My years of customer-facing roles have honed my communication skills, enabling me to bridge the gap between technical concepts and user needs. I excel in collaborative environments, where I can leverage both my technical knowledge and interpersonal skills to drive projects forward and deliver solutions that align with both business objectives and user expectations.
          </p>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="projects"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2>My Work</h2>
          <div className="project-list">
            <div className="project-card" id="collective-project">
              <h3>Collective</h3>
              <p>
                A civic tech project focused on increasing community engagement through an accessible platform. 
                I worked on building features that allow users to organize local events, share resources, and participate in discussions.
              </p>
              <a href="https://github.com/ENiA-collective/collective" className="project-link">View on GitHub</a>
            </div>
          </div>
        </div>
      </motion.section>

      {showContactForm && (
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="cta-button">Send Message</button>
            </form>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
            <button onClick={toggleContactForm} className="cta-button">Back</button>
          </div>
        </motion.div>
      )}

      <motion.footer 
        id="contact" 
        className="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h2>Get in Touch</h2>
          <p>
            Let’s connect! Feel free to reach out if you're interested in working together or just want to chat.
          </p>
          <div className="contact-links">
            {/* <a onClick={toggleContactForm} href="#contact">Email Me</a> */}
            <a href="https://www.linkedin.com/in/alexa-leoto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/alexaleoto" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;