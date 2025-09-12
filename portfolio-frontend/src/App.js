import React, { useState } from "react"; // ✅ import useState
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InternshipCertifications from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="dark:bg-gray-900">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <InternshipCertifications />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
