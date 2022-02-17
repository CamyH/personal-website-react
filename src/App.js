import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/landing-page/landing-page.css";
import Wave from "./components/landing-page/Wave";
import LandingPage from "./components/landing-page/Landing-Page";

function App() {
  return (
    <main>
      <Wave />
      <LandingPage />
    </main>
  );
}

export default App;
