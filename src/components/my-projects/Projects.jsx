import React from 'react';
import "./projects.css";
import f2 from "./f2-program.png";

function Projects() {
    return (
        <React.Fragment>
            <section id='projects-page'>
                <div id='header'>
                    <h1 id='projects-header'>Projects</h1>
                </div>
                <div id='projects'>
                    <img src={f2} id='project-1' class="img-fluid" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Projects;