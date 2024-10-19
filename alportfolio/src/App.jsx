import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
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
            With a background in cybersecurity and a passion for creative problem-solving, I bring a unique perspective to every project. 
            My goal is to create applications that not only function smoothly but also have a meaningful impact. I believe in building software that empowers users and contributes to the greater good.
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
              <h3>ENiA Collective</h3>
              <p>
                A civic tech project focused on increasing community engagement through an accessible platform. 
                I worked on building features that allow users to organize local events, share resources, and participate in discussions.
              </p>
              <a href="https://github.com/ENiA-collective/collective" className="project-link">View on GitHub</a>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>A brief description of this project and what makes it awesome.</p>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>
        </div>
      </motion.section>

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
            <a href="mailto:alexaricardleoto@gmail.com">Email Me</a>
            <a href="https://www.linkedin.com/in/alexa-leoto/">LinkedIn</a>
            <a href="https://github.com/alexaleoto">GitHub</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
