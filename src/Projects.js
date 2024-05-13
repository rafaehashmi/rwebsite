import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import stock from "./bulldoze.jpg";
import ai from "./sudoku.jpg";
import hub from "./hub.jpg";

const Projects = () => {
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
            <div className="projects-container">
            <div className="project-card">
                <img src={stock} alt="Project Name" className="project-image" />
                <div className="project-info">
                    <h3>Machine Learning Price Regression Model</h3>
                    <p>A machine learning model used to analyze bulldozer pricing</p>
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
                <img src={ai} alt="Project Name" className="project-image" />
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
                </div>
            </div>
            </div>
        </div>


    );
};

export default Projects;