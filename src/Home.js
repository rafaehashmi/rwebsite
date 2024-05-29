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
                    When I'm not diving into tech, you can find me on the football field or practicing martial arts.
                    Welcome to my portfolio!
                </p>
                <div className="programming-languages">
                    <span>Languages/Frameworks/Libraries I use:</span>
                    <code>Java</code> <code>JavaScript</code> <code>Python</code>
                    <code>HTML</code> <code>CSS</code> <code>SQL</code> <code>R</code>
                    <code>C</code> <code>C++</code> <code>matplotlib</code> <code>NumPy</code>
                    <code>Pandas</code> <code>seaborn</code> <code>SciKit Learn</code>
                    <code>TensorFlow</code> <code>React</code> <code>Visual Basic for Applications (VBA)</code>
                </div>
                <div className="programming-languages">
                    <span>Technologies I use:</span>
                    <code>AutoCAD</code> <code>alteryx</code> <code>Confluence</code>
                    <code>Fusion 360</code> <code>Git</code> <code>GitHub</code>
                    <code>Jira</code> <code>Jupyter</code> <code>Linux</code>
                    <code>Power BI</code> <code>Microsoft Office</code> <code>MySQL</code>
                    <code>Node.js</code> <code>SOLIDWORKS</code> <code>Tableau</code>
                    <code>Windows</code>

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
                        href={`${process.env.PUBLIC_URL}/srHashmiRM3.pdf`}
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