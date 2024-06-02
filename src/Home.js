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
                <h1 style={{ fontSize: "2.5em" }}>
                    Hi there, I'm <span className="name-gradient">Rafae</span>! 👨🏽‍💻
                </h1>
                <p style={{ fontSize: "1.2em" }}>
                    I'm a BSc student in Computer Science, specializing in Big Data Systems with a minor in Data Analytics.
                    Fluent in both French and English, I have a passion for robotics, machine learning, AI and data analytics;
                    I’m always eager to explore the latest advancements in these fields.
                    When I'm not diving into work, you can find me on the football field or in the gym.
                </p>
                <div className="programming-languages">
                    <span>Languages I use:</span>
                    <code>C</code> <code>C++</code> <code>CSS</code>
                    <code>HTML</code> <code>Java</code> <code>JavaScript</code>
                    <code>LaTeX</code> <code>Python</code> <code>R</code>
                    <code>SQL</code> <code>VBA</code>
                </div>
                <div className="programming-languages">
                    <span>Frameworks I use:</span>
                    <code>Angular</code> <code>Bootstrap</code> <code>Next.js</code>
                    <code>Node.js</code> <code>React Native</code> <code>TensorFlow</code>
                </div>
                <div className="programming-languages">
                    <span>Cloud/Databases I use:</span>
                    <code>AWS</code> <code>Azure</code> <code>Firebase</code>
                    <code>MongoDB</code> <code>MySQL</code>
                </div>

            </div>

            <p className="outreach-message">
                Feel free to reach out through my social media or take a look at my
                resume below!
            </p>
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
                    href={`${process.env.PUBLIC_URL}/srHashmiRM4.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume"
                >
                    <FontAwesomeIcon icon={faFile} />
                </a>
            </div>
        </div>
    );
};

export default Home;