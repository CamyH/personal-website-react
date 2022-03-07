import React from "react";
import "./about-me.css";

function AboutMe() {
	return (
		<React.Fragment>
			<h1 id="about-header">About Me</h1>
			<div id="content-wrapper">
				<img id="profile-pic" src="placeholder.png" alt="placeholder"></img>
				<p class="about-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
					libero non leo condimentum gravida. Pellentesque imperdiet erat et
					ipsum varius facilisis. Suspendisse eu imperdiet mi. Nulla sed nibh
					nec felis dapibus semper. Nullam sodales, quam sit amet luctus
					elementum, lorem odio dignissim leo, rutrum aliquam augue ipsum ac
					nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Aliquam bibendum pretium consequat. Integer
					quis orci fermentum, placerat metus a, rutrum magna.
				</p>
			</div>
		</React.Fragment>
	);
}

export default AboutMe;
