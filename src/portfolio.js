import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import tej30 from './tej30.jpg';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
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

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <h1 >Welcome to My Portfolio</h1>
      <img src={tej30} alt="Your Picture" className="profile-image" />
      <p>
        Hello! I'm a creative developer passionate about building awesome web experiences.
      </p>
      <div className="socials">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30}/>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg" target="_blank" rel="noopener noreferrer" >
            <AiFillTwitterCircle/>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/tejiri-code" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30}/>
              GitHub
            </a>
          </li>
          <li>
          <a className=' hover:text-teal-500'  href="mailto:evelynedjere@gmail.com"> <AiFillMail size={30}/></a>
          </li>
        </ul>
      </div>
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project">
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">This is the first project I worked on.</p>
          <a className="project-link" href="project-1-url" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">This is the second project I worked on.</p>
          <a className="project-link" href="project-2-url" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Portfolio;
