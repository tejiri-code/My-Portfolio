import React from 'react';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import image from './image.png';
import connected from './connected.png';
import navigate from './navigate.png';
import linktree from './linktree.png';
import agt from './agt.png';
import quiz from './quiz.png';
import investify from './investify.png';
import spend from './spend.png'
import recp from './ReCP.png'
import moda from './moda.png'



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

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', scrollActive);

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id'); // Declare sectionId here

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  const [isNavOpen, setIsNavOpen] = useState(false);
  /*===== MENU SHOW Y HIDDEN =====*/
  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const toggleMenu = () => {
  setIsNavOpen(!isNavOpen);
};
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <header class="l-header" >
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo" className="text-white font-burtons">TEJIRI CODES</a>
                </div>

                <div class={isNavOpen ? 'nav__menu show' : 'nav__menu'} id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
                        <li class="nav__item"><a href="#portfolio" class="nav__link">Projects</a></li>
                        <button onClick={handleDownload} class="btn bg-white h-8 rounded-md text-black text-center text-base ml-20">Resume</button>
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i class='bx bx-menu'>
                      
                    </i>
                </div>
            </nav>
        </header>
      <div className="navbar" id="home">
      <h1 className="text-xl font-burtons">
  <span className="animated-text">
    Hi! It's Tejiri
  </span>
</h1>  


      </div>
      <h1 id="about">Welcome to My Portfolio</h1>
      <img src={image} alt="Your Picture" className="profile-image" />
      <div className="py-6 mb-12">
        <div className="text-center px-2 py-10">
          <h2 className="text-2xl py-2 text-blue-900 font-medium md:text-6xl">
            Edjere Evelyn Oghenetejiri
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer</h3>
          <p className="text-base py-5 leading-8 text-gray-800 max-w-1xl mx-auto " >
            Hello! I'm a creative developer passionate about building awesome web experiences.<br/>
           I enjoy collaborating with talented individuals and teams to bring ideas to life and deliver
    exceptional digital solutions. <br/>
     I'm currently open to opportunities. 
          </p>
        </div>
      </div>

      <div className="socials">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a className="hover:text-blue-900"
              href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900"
              href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle size={30} />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="https://github.com/tejiri-code" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-900" href="mailto:evelynedjere@gmail.com">
              <AiFillMail size={30} />
            </a>
          </li>
        </ul>
      </div>
     
     
      <section class="skills section" id="skills">
      <hr></hr>
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">
                    <div class="skills__box">
                        <h3 class="skills__subtitle">Development</h3>
                        <span class="skills__name">Html</span>
                        <span class="skills__name">Css</span>
                        <span class="skills__name">Javascript</span>
                        <span class="skills__name">Tailwind CSS</span>
                        <span class="skills__name">Java</span>
                        <span class="skills__name">React</span>
                    </div>
                </div>
            </section>

            <hr></hr>
            <h2 className="section-title" id="portfolio"><u>Projects</u></h2>
      <div className="projects">

        <div className="project">
          <p className="project-description">Moda Matrix</p>
          <a className="project-link" href="https://modamatrix.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={moda} alt="ReCP" className="connect" />
            <button className='button'> Open
</button>
          </a>
       
        </div>

        <div className="project">
          <p className="project-description">ReCP</p>
          <a className="project-link" href="https://recep-tejiri-code.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={recp} alt="ReCP" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>

        <div className="project">
          <p className="project-description">Spend W Me</p>
          <a className="project-link" href="https://spend-w-me.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={spend} alt="Spend W Me" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">Investify</p>
          <a className="project-link" href="https://investify-me.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={investify} alt="Investify" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">ConnectED</p>
          <a className="project-link" href="http://www.connected.net.ng/" target="_blank" rel="noopener noreferrer">
            <img src={connected} alt="ConnectED" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">Navigate</p>
          <a className="project-link" href="https://tejiri-code.github.io/University-Navigation-Map/" target="_blank" rel="noopener noreferrer">
            <img src={navigate} alt="Navigate" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">Linktree Clone</p>
          <a className="project-link" href="https://tejiri-code.github.io/LinkTree-Clone/" target="_blank" rel="noopener noreferrer">
            <img src={linktree} alt="Linktree" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">Automated Timetable Generator</p>
          <a className="project-link" href="https://tejiri-code.github.io/Automated-Timetable-Generator/" target="_blank" rel="noopener noreferrer">
            <img src={agt} alt="AGT" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
        <div className="project">
          <p className="project-description">Quiz Me</p>
          <a className="project-link" href="https://tejiri-code.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">
            <img src={quiz} alt="Quiz" className="connect" />
            <button className='button'> Open
</button>
          </a>
        </div>
      </div>
     
    </animated.div>
    
  );
}

export default Portfolio;
