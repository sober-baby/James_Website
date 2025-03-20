// /components/IntroductionSection.js
import React from "react";
import photoJames from "./photo_james.jpg"; // Adjust path if needed

function IntroductionSection() {
  return (
    <section className="intro-section">
      <div className="container text-center">
        <img 
          src={photoJames} 
          alt="James" 
          style={{ 
            width: "400px", 
            height: "400px", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginBottom: "1rem" 
          }} 
        />
        <h1>James Tan</h1>
        <p>
          Hi there! I am currently studying computer engineering at the University of Toronto. 
          I am enthusiastic about robotics (both software and hardware), 
          game development, and machine learning!
        </p>
      </div>
    </section>
  );
}

export default IntroductionSection;
