import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import tej30 from './images/tej30.jpg';



function Portfolio() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <div className="intro">
      <img src="/images/tej30.jpg" alt="Your Picture" className="profile-image" />
        <h1 style={{ color: '#ff6f00' }}>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm a creative developer passionate about building awesome web experiences.
        </p>
      </div>
      <div className="socials">
        <h2>Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a href="https://github.com/tejiri-code" class="btn">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250" class="btn">Linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg" class="btn">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>This is the first project I worked on.</p>
          <a href="project-1-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>This is the second project I worked on.</p>
          <a href="project-2-url" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </animated.div>
  );
}

export default Portfolio;
