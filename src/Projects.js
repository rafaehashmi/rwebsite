import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import bulldoze from "./bulldoze.jpg";
import sudoku from "./sudoku.jpg";
import hub from "./hub.jpg";
import air from "./pollution.jpg";
import knight from "./knight.jpg";

const Projects = () => {
    return (

        <div className="projects-container">
            <div className="project-card">
                <img src={bulldoze} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>Machine Learning Price Regression Model</h3>
                    <p>A machine learning model used to analyze and predict future bulldozer pricing</p>
                    <a
                        href="https://github.com/rafaehashmi/machineLearningRegressionModel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </div>
            </div>
            <div className="project-card">
                <img src={sudoku} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>AI Sudoku Solver</h3>
                    <p>
                        An AI program that solves Sudoku puzzles using backtracking and
                        constraint satisfaction algorithms
                    </p>
                    <a
                        href="https://github.com/rafaehashmi/sudokuSolveAI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </div>
            </div>
            <div className="project-card">
                <img src={hub} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>Laurier Student Study Hub</h3>
                    <p>
                        A platform for students to connect, collaborate, and support each
                        other academically
                    </p>
                    <a
                        href="https://github.com/laurier-student-study-hub/laurier-student-study-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href="https://lsshub.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <FontAwesomeIcon icon={faLaptopCode} /> Demo
                    </a>

                </div>
            </div>
            <div className="project-card">
                <img src={air} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>World Air Quality Data Visualization</h3>
                    <p>
                        A Data Analysis and Visualization on the World Air Quality up until March of 2024
                    </p>
                    <a
                        href="https://github.com/onefouroneIndustries/worldAirQualityDataVisualization"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </div>
            </div>
            <div className="project-card">
                <img src={knight} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>A Knight's Tour</h3>
                    <p>
                        The Knights Tour program features a user-friendly interface that allows you
                        to select from various algorithms to solve the classic Knights Tour problem
                    </p>
                    <a
                        href="https://github.com/onefouroneIndustries/KnightsTour"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href="https://aknightstour.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <FontAwesomeIcon icon={faLaptopCode} /> Demo
                    </a>

                </div>
            </div>
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
        </div>



    );
};

export default Projects;