import React from 'react';
import "./projects.css";
import f2 from "./f2-program.png";
import weather from "./weather-app.png";
import cyoag from "./vikingr-adventure.png";

function Projects() {
    return (
        <React.Fragment>
            <section id='projects-page'>
                <div id='header'>
                    <h1 id='projects-header'>Projects</h1>
                </div>
                <div id='projects'>
                    <img src={f2} id='project-1' class="projects img-fluid" />
                    <img src={weather} id="project-2" class="projects img-fluid" />
                    <img src={cyoag} id="project-3" class="projects img-fluid" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;