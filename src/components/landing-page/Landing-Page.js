import React from "react";
import "./landing-page.css";

function LandingPage() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <h1 id="name-h1">Cameron Hunt</h1>
        <h2 id="what-am-i-h2">Student / Developer</h2>
        <div id="buttons">
          <button id="project-button" class="btn btn-primary btn-lg">
            PROJECTS
          </button>
          <button id="cv-button" class="btn btn-primary btn-lg">
            CV
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
