import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import image from './image.png';
import connected from './connected.png';
import navigate from './navigate.png';
import linktree from './linktree.png';
import agt from './agt.png';
import quiz from './quiz.png';
import investify from './investify.png'

function Portfolio() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1E7wmLC1l0D7PZIFJ53aX5nZYc8l3D6O-/view?usp=sharing';
    link.download = 'Resume.png';
    link.click();
  };
  const slideIn = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <div className="navbar">
      <h1 className="text-xl font-burtons">
  <span className="animated-text">
    Hi! It's Tejiri
  </span>
</h1>  
<button onClick={handleDownload} class="btn">Resume</button>
      </div>
      <h1>Welcome to My Portfolio</h1>
      <img src={image} alt="Your Picture" className="profile-image" />
      <div className="py-6 mb-12">
        <div className="text-center px-2 py-10">
          <h2 className="text-2xl py-2 text-teal-500 font-medium md:text-6xl">
            Edjere Evelyn Oghenetejiri
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer</h3>
          <p className="text-base py-5 leading-8 text-gray-800 max-w-1xl mx-auto ">
            Hello! I'm a creative developer passionate about building awesome web experiences.
           I enjoy collaborating with talented individuals and teams to bring ideas to life and deliver
    exceptional digital solutions.
     I'm currently open to opportunities.
          </p>
        </div>
      </div>
      <div className="socials">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/tejiri-code" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a className="hover:text-teal-500" href="mailto:evelynedjere@gmail.com">
              <AiFillMail size={30} />
            </a>
          </li>
        </ul>
      </div>
     
      <div className="projects">
      <hr></hr>
        <h2 className="section-title"><u>Projects</u></h2>
       
        <div className="project">
          <p className="project-description">Investify</p>
          <a className="project-link" href="https://investify-me.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={investify} alt="Investify" className="connect" />
          </a>
        </div>
        <div className="project">
          <p className="project-description">ConnectED</p>
          <a className="project-link" href="http://www.connected.net.ng/" target="_blank" rel="noopener noreferrer">
            <img src={connected} alt="ConnectED" className="connect" />
          </a>
        </div>
        <div className="project">
          <p className="project-description">Navigate</p>
          <a className="project-link" href="https://tejiri-code.github.io/University-Navigation-Map/" target="_blank" rel="noopener noreferrer">
            <img src={navigate} alt="Navigate" className="connect" />
          </a>
        </div>
        <div className="project">
          <p className="project-description">Linktree Clone</p>
          <a className="project-link" href="https://tejiri-code.github.io/LinkTree-Clone/" target="_blank" rel="noopener noreferrer">
            <img src={linktree} alt="Linktree" className="connect" />
          </a>
        </div>
        <div className="project">
          <p className="project-description">Automated Timetable Generator</p>
          <a className="project-link" href="https://tejiri-code.github.io/Automated-Timetable-Generator/" target="_blank" rel="noopener noreferrer">
            <img src={agt} alt="AGT" className="connect" />
          </a>
        </div>
        <div className="project">
          <p className="project-description">Quiz Me</p>
          <a className="project-link" href="https://tejiri-code.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">
            <img src={quiz} alt="Quiz" className="connect" />
          </a>
        </div>
      </div>
    </animated.div>
  );
}

export default Portfolio;
