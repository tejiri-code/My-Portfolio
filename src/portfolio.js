import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

const Portfolio = () => {
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

  const rotate = useSpring({
    transform: 'rotate(0deg)',
    from: { transform: 'rotate(-360deg)' },
    config: { duration: 2000 },
  });

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <h1 style={{ color: '#ff6f00' }}>Welcome to My Portfolio</h1>
      <p>
        Hello! I'm a creative developer passionate about building awesome web experiences.
      </p>
      <animated.div className="skills" style={slideIn}>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Animation</li>
        </ul>
      </animated.div>
      <animated.div className="projects" style={rotate}>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>This is the first project I worked on.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>This is the second project I worked on.</p>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Portfolio;
