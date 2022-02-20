import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/landing-page/landing-page.css";
import LandingPage from "./components/landing-page/Landing-Page";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
