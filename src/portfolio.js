import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import image from './image.png';
import {AiFillLinkedin,AiFillGithub, AiFillMail,AiFillTwitterCircle,} from 'react-icons/ai';
import connected from './connected.png';

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
       <div className=' py-10 mb-6 flex justify-between'>
       <h1 className="text-xl font-burtons">
  {Array.from("Hi! It's Tejiri").map((letter, index) => (
    <span
      key={index}
      className="animated-text"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {letter}
    </span>
  ))}
</h1>
       </div>
      <h1 >Welcome to My Portfolio</h1>
      <img src={image} alt="Your Picture" className="profile-image" />
       <div className=' py-6 mb-12 '>
        <div className=' text-center px-2 py-10'>
        <h2 className=' text-2xl py-2 text-teal-500 font-medium md:text-6xl'>Evelyn Edjere Oghenetejiri</h2>
         <h3 className=' text-2xl py-2 md:text-3xl'>Frontend Developer</h3> 
         <p className=' text-base py-5 leading-8 text-gray-800  max-w-1xl mx-auto dark:text-white'>
         Hello! I'm a creative developer passionate about building awesome web experiences.
         Currently a freelancer, learning how to improve my skills anyway possible
         </p>
        </div>
        </div>
      <div className="socials">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30}/>
            
            </a>
          </li>
          <li>
            <a href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg" target="_blank" rel="noopener noreferrer" >
            <AiFillTwitterCircle size={30}/>
              
            </a>
          </li>
          <li>
            <a href="https://github.com/tejiri-code" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={30}/>
              
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
          <p className="project-description">ConnectED</p>
          <a className="project-link" href="project-2-url" target="_blank" rel="noopener noreferrer">
          <img src={connected} alt="Your Picture" className="connect" />
          </a>
        </div>
        <div className="project">
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">This is the second project I worked on.</p>
          <a className="project-link" href="project-2-url" target="_blank" rel="noopener noreferrer">
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
