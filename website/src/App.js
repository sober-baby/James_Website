// App.js
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Your existing components
import IntroductionSection from "./components/IntroductionSection";
import SkillsSection from "./components/SkillsSection";
import ResumeProjectsSection from "./components/ResumeProjectsSection";

// New components
import ChatSection from "./components/ChatSection";
import PopupModal from "./components/PopupModal";

function App() {
  // // State for controlling the popup modal
  // const [showPopup, setShowPopup] = useState(false);

  // // Show the popup after a small delay (optional)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000); // 2 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  // // Or show the popup when a user clicks a button, etc.

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <div className="App">
      {/* Example Intro Section with a highlight */}
      <IntroductionSection />
      
      <SkillsSection />

      <ResumeProjectsSection />

      <ChatSection />

      <footer className="text-center mt-5 pb-4">
        <a
          href="https://github.com/sober-baby"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/james-tan-5a4b07224/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <i className="bi bi-linkedin" style={{ fontSize: "2rem", color: "#0e76a8" }}></i>
        </a>
      </footer>
{/* 
      <PopupModal 
        show={false}
        onClose={handleClosePopup}
        title="Welcome to My Website!"
      >
        <p className="mb-0">
          I've just added a brand-new <span className="highlight">ChatGPT</span> feature.
          Give it a try below!
        </p>
      </PopupModal> */}
    </div>
  );
}

export default App;
