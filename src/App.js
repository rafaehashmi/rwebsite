import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <h1>
          Hi there, I'm <span className="name-gradient">Syed Rafae Hashmi</span>! 👨🏽‍💻
        </h1>
        <p>
            Hi there! I'm Rafae, a BSc student in Computer Science with a specialization in Big Data Systems and a minor
            in Data Analytics. Outside of the tech realm, you can find me on the football field or practicing martial
            arts. I'm particularly passionate about robotics, machine learning, and AI. I'm always eager to explore the
            latest advancements in these fields. Feel free to reach out on any of my socials or check out my resume
            below!
        </p>
        <div className="programming-languages">
          <span>Languages I use:</span>
          <code>Python</code> <code>JavaScript</code> <code>Java</code>
          <code>HTML</code> <code>CSS</code> <code>SQL</code> <code>R</code>
          <code>Sass</code> <code>C#</code> <code>C++</code>
        </div>
        <div className="programming-languages">
          <span>Frameworks I use:</span>
          <code>Node.js</code> <code>MongoDB</code> <code>React</code>
          <code>Bootstrap</code> <code>Express</code> <code>Tailwind CSS</code>
        </div>
        <div className="certifications">
          <span>Certifications:</span>
          <a
            href="https://www.udemy.com/certificate/UC-51adb8d0-edc3-4efc-83ef-c868d08d0495/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete Machine Learning and Data Science Bootcamp
          </a>
          <p className="outreach-message">
            Feel free to reach out through my social media or take a look at my
            resume below!
          </p>
        </div>
        <div className="social-links">
          <a href="https://github.com/rafaehashmi" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/rafaehashmi_/"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-rafae-hashmi/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/srHashmiApril2024.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;