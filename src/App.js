import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/landing-page/landing-page.css";
import LandingPage from "./components/landing-page/Landing-Page";
import Projects from "./components/my-projects/Projects";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
}

export default App;
