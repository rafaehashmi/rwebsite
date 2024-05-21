import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
    return (
        <div>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="content">
                <h1>
                    Hi there, I'm <span className="name-gradient">Rafae</span>! 👨🏽‍💻
                </h1>
                <p>
                    I'm a BSc student in Computer Science with a specialization in Big Data Systems and a minor
                    in Data Analytics. Outside of the tech realm, you can find me on the football field or practicing martial
                    arts. I'm particularly passionate about robotics, machine learning, and AI. I'm always eager to explore the
                    latest advancements in these fields.
                </p>
                <div className="programming-languages">
                    <span>Languages I use:</span>
                    <code>Java</code> <code>JavaScript</code> <code>Python</code>
                    <code>HTML</code> <code>CSS</code> <code>SQL</code> <code>R</code>
                    <code>ARMv7</code> <code>Latex</code> <code>VBA</code> <code>C</code> <code>C++</code>
                    <code>C#</code> <code>MATLAB</code> <code>Maple</code>
                </div>
                <div className="programming-languages">
                    <span>Frameworks I use:</span>
                    <code>Node.js</code> <code>MongoDB</code> <code>React</code>
                    <code>Bootstrap</code> <code>Express</code> <code>Tailwind CSS</code>
                </div>
                <div className="certifications">
                    <span> </span>

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
                        href="https://www.linkedin.com/in/syed-rafae-hashmi/"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href={`${process.env.PUBLIC_URL}/srHashmiTechMay21.pdf`}
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

export default Home;