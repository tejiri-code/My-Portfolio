import React from 'react';
import { useSpring, animated } from 'react-spring';
import './index.css';

const Portfolio = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hello! I'm a creative developer passionate about building awesome web
        experiences.
      </p>
      <animated.div
        className="skills"
        style={{
          transform: fadeIn.opacity.interpolate((o) => `scale(${o})`),
        }}
      >
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Animation</li>
        </ul>
      </animated.div>
      <animated.div
        className="projects"
        style={{
          transform: fadeIn.opacity.interpolate((o) => `translateY(${o * 20}px)`),
        }}
      >
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
