"use client";

import { Button } from "@/components/ui/button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  return (
    <main>
      <section className="flex items-center justify-center gap-20 h-[88vh]">
        <img
          src="./assets/profile-pic.png"
          alt="Shanmukeshwar profile picture"
          className="w-[400px]"
        />
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg">Hello, I'm</p>
          <h1 className="text-3xl font-extrabold">Shanmukeshwar</h1>
          <p className="text-3xl font-medium">Full Stack Developer</p>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                window.open("./assets/resume-example.pdf");
              }}
            >
              Download CV
            </Button>
            <button></button>
            <Button
              className="btn btn-color-1"
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </Button>
          </div>
          <div className="flex gap-4">
            <AiFillGithub
              className="w-10 h-10 text-white"
              onClick={() => window.open("https://linkedin.com/")}
            />
            <AiFillLinkedin
              className="w-10 h-10 text-white"
              onClick={() => window.open("https://github.com/")}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 mx-[10rem]">
        <p className="text-lg">Get To Know More</p>
        <h1 className="text-5xl font-extrabold">About Me</h1>
        <div className="flex gap-12">
          <img
            src="./assets/about-pic.png"
            alt="Profile picture"
            className="w-[400px] rounded-xl"
          />
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-center gap-4 justify-around w-full">
              <div className="border rounded-md w-full flex flex-col items-center p-8 text-center">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="w-[2rem]"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className="border rounded-md w-full flex flex-col items-center p-8 text-center">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="w-[2rem]"
                />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#experience")}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open("https://github.com/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (location.href = "./#projects")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:examplemail@gmail.com">Example@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
