import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillTwitterCircle,
  AiFillStar,
} from "react-icons/ai";
import image from "./image.png";
import connected from "./connected.png";
import navigate from "./navigate.png";
import linktree from "./linktree.png";
import agt from "./agt.png";
import quiz from "./quiz.png";
import investify from "./investify.png";
import spend from "./spend.png";
import recp from "./ReCP.png";
import moda from "./moda.png";
import wander from "./wanderlust.png";
import room from "./roomswift.png";
import resumeforge from "./resumeforge.png";
import analytics from "./analytics_dashboard.png"

function Portfolio() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1RbWxkkHtoaycTLhSYn164PmqYCsRmDH3/view?usp=sharing";
    link.download = "Resume.png";
    link.click();
  };

  const darkMode = () => {
    const theme = document.getElementById("theme");
    const icon = document.getElementById("icon");

    if (theme) {
      theme.href = "dark.css";
      icon.src = "sun.png";
    } else {
      theme.href = "light.css";
      icon.src = "moon.png";
    }
  };
  const slideIn = useSpring({
    transform: "translateX(0)",
    from: { transform: "translateX(-100%)" },
    config: { duration: 1000 },
  });
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", scrollActive);

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id"); // Declare sectionId here

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }
  const [isNavOpen, setIsNavOpen] = useState(false);
  /*===== MENU SHOW Y HIDDEN =====*/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  /*===== REMOVE MENU MOBILE =====*/
  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector(".carousel-track");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let slideIndex = 0;

    function showSlide(index) {
      carouselTrack.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % carouselSlides.length;
      showSlide(slideIndex);
    }

    function prevSlide() {
      slideIndex =
        (slideIndex - 1 + carouselSlides.length) % carouselSlides.length;
      showSlide(slideIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  });

  return (
    <animated.div className="portfolio" style={fadeIn}>
      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
            <a href="#" class="nav__logo" className="text-white font-burtons">
              TEJIRI CODES
            </a>
          </div>

          <div class={isNavOpen ? "nav__menu show" : "nav__menu"} id="nav-menu">
            
            <ul class="nav__list" >
              <li class="nav__item">
                <a href="#home" class="nav__link">
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">
                  About
                </a>
              </li>
              <li class="nav__item">
                <a href="#skills" class="nav__link">
                  Skills
                </a>
              </li>
              <li class="nav__item">
                <a href="#portfolio" class="nav__link">
                  Projects
                </a>
              </li>

              <button
                onClick={handleDownload}
                class="btn bg-black border border-solid  border-white h-7 rounded-md text-white text-center text-base ml-5 hover:bg-white hover:text-black hover:border-black"
              >
             <span className="p-3">  Resume</span>
              </button>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i class="bx bx-menu"></i>
          </div>
        </nav>
      </header>
      <div className="navbar" id="home">
        <h1 className="text-xl font-burtons">
          <span className="animated-text">Hi! It's Tejiri</span>
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
          <p className="text-base py-5 leading-8 text-gray-800 max-w-1xl mx-auto ">
            As an aspiring web developer, I am fueled by a relentless drive to
            refine my skills and explore diverse programming languages and
            methods.
            <br />
            Possessing a meticulous attention to detail, I am motivated to
            transform code into dynamic creations.
            <br />
            I am committed to unceasingly elevate my abilities, consistently
            embracing novel approaches and extending the limits of my expertise.
            <br />
            My journey involves constant learning and advancement, aimed at
            achieving excellence in every facet of my development journey.{" "}
            <br />
          </p>
        </div>
      </div>

      <div className="socials">
        <h2 className="section-title">Connect with Me</h2>
        <ul className="social-links">
          <li>
            <a
              className="hover:text-blue-900"
              href="https://www.linkedin.com/in/edjere-evelyn-oghenetejiri-5267a9250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-900"
              href="https://twitter.com/oghenetejiirii?s=11&t=iqkQNAbtjjHj9gPd2kh0yg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle size={30} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-900"
              href="https://github.com/tejiri-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-900"
              href="mailto:evelynedjere@gmail.com"
            >
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
            <h3 class="skills__subtitle"></h3>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5--v1"
              />
              HTML
            </span>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/css3.png"
                alt="css3"
              />
              CSS
            </span>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="javascript--v1"
              />
              JAVASCRIPT
            </span>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/tailwind_css.png"
                alt="tailwind_css"
              />
              TAILWIND
            </span>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/react-native.png"
                alt="react-native"
              />
              REACT
            </span>
            <span class="skills__name">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/git.png"
                alt="git"
              />
              GIT
            </span>
            <span class="skills__name">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/mysql-logo.png"
                alt="git"
              />
              SQL
            </span>
            <span class="skills__name">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/sf-regular-filled/48/github.png"
                alt="git"
              />
              GITHUB
            </span>
          <span class="skills__name">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/color/48/firebase.png"
                alt="git"
              />
             FIREBASE
            </span>
            <span class="skills__name">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/fluency/48/node-js.png"
                alt="git"
              />
             NODE.JS
            </span>
            
            <span class="skills__name">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/dusk/100/000000/postman-api.png"
                alt="git"
              />
             POSTMAN API
            </span>
          </div>
        </div>
      </section>

      <hr></hr>
      <h2 className="section-title" id="portfolio">
        <u className="mb-5">Projects</u>
      </h2>
      <div className="projects">
        <div class="carousel-container">
          <div class="carousel-track">

          <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Analytics Dashboard</p>
                <a
                  className="project-link"
                  href="http://tejiri.me/analytics-dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={analytics}
                    alt="Analytics Dashboard"
                    className="connect"
                  />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            
            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">ResumeForge</p>
                <a
                  className="project-link"
                  href="https://resumeforge.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={resumeforge}
                    alt="Resumeforge"
                    className="connect"
                  />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">RoomSwift</p>
                <a
                  className="project-link"
                  href="https://roomswift.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={room} alt="RoomSwift" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">WanderLust</p>
                <a
                  className="project-link"
                  href="https://wanderlust-world.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wander} alt="Wanderlust" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Moda Matrix</p>
                <a
                  className="project-link"
                  href="https://modamatrix.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={moda} alt="modamatix" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">ReCP</p>
                <a
                  className="project-link"
                  href="https://recep-tejiri-code.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={recp} alt="ReCP" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Spend W Me</p>
                <a
                  className="project-link"
                  href="https://spend-w-me.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={spend} alt="Spend W Me" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Investify</p>
                <a
                  className="project-link"
                  href="https://investify-me.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={investify} alt="Investify" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">ConnectED</p>
                <a
                  className="project-link"
                  href="http://www.connected.net.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={connected} alt="ConnectED" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            {/* <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Navigate</p>
                <a
                  className="project-link"
                  href="https://tejiri-code.github.io/University-Navigation-Map/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navigate} alt="Navigate" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div> */}


            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Linktree Clone</p>
                <a
                  className="project-link"
                  href="https://tejiri-code.github.io/LinkTree-Clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linktree} alt="Linktree" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">
                  Automated Timetable Generator
                </p>
                <a
                  className="project-link"
                  href="https://tejiri-code.github.io/Automated-Timetable-Generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={agt} alt="AGT" className="connect" />
                  <button className="button"> Open</button>
                </a>
              </div>
            </div>

            <div class="carousel-slide">
              <div className="project">
                <p className="project-description">Quiz Me</p>
                <a
                  className="project-link"
                  href="https://tejiri-code.github.io/Quiz-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={quiz} alt="Quiz" className="connect" />
                  <button className="button"> View</button>
                </a>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <button class="prev-button">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/000000/long-arrow-left.png"
                alt="long-arrow-left"
              />{" "}
            </button>
            <button class="next-button">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/windows/32/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Portfolio;
