import React from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";
import Wave from "./Wave";

function LandingPage() {
  return (
    <React.Fragment>
      <Wave />
      <section id="wrapper">
        <h1 id="name-h1">Cameron Hunt</h1>
        <h2 id="what-am-i-h2">Student / Developer</h2>
        <div id="buttons">
          <Link to={"/"}>
            <button id="about-me-button" class="btn btn-primary btn-lg">
              ABOUT ME
            </button>
          </Link>
          <Link to={"/projects"}>
            <button id="project-button" class="btn btn-primary btn-lg">
              PROJECTS
            </button>
          </Link>
          <Link to={"/"}>
            <button id="cv-button" class="btn btn-primary btn-lg">
              CV
            </button>
          </Link>
        </div>
      </section>
      <div class="landing-page-circle-1"></div>
      <div class="landing-page-circle-2"></div>
      <div class="landing-page-circle-3"></div>
    </React.Fragment>
  );
}

export default LandingPage;
