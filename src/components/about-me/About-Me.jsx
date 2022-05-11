import React from "react";
import "./about-me.css";
import github from "./github-logo-white.png";
import linkedin from "./linkedin-logo.png";
import email from "./email.png";

function AboutMe() {
	return (
		<React.Fragment>
			<h1 id="about-header">About Me</h1>
			<div id="content-wrapper">
				<img id="profile-pic" src="placeholder.png" alt="placeholder"></img>
				<p class="about-text">
					Student Software Developer who has a keen interest in Web Technologies
					and Software Engineering. <br />
					Currently studying for a degree in Computing from Edinburgh Napier
					University.
					<br /> <br />
					Open to any internship or job opportunities, please get in touch!
				</p>
			</div>
			<div id="socials-container">
				<a href="https://github.com/CamyH" target="new">
					<img
						src={github}
						id="github-logo"
						class="logo img-fluid"
						alt="github icon"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/cameron-hunt-48092b198/"
					target="new">
					<img
						src={linkedin}
						id="linkedin-logo"
						class="logo img-fluid"
						alt="linkedin icon"
					/>
				</a>
				<a href="" target="new">
					<img
						src={email}
						id="email-logo"
						class="logo img-fluid"
						alt="email icon"
					/>
				</a>
			</div>
		</React.Fragment>
	);
}

export default AboutMe;
