// /components/ResumeProjectsSection.js

import React from "react";
import Button from "./Buttons";

function ResumeProjectsSection() {
  const handleResumeClick = () => {
    window.open("https://example.com/resume.pdf", "_blank");
  };

  const handleFTCClick = () => {
    window.open("https://example.com/ftc_robotics_video", "_blank");
  };

  const handleDayTravelMapClick = () => {
    window.open("https://example.com/day_travel_map", "_blank");
  };

  return (
    <section className="container resume-projects">

        <h2 className="text-center mb-4">Resume & Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Resume</h3>
          <Button onClick={handleResumeClick} color="custom">
            View Resume
          </Button>
        </div>
        <div className="col-md-4">
          <h3>FTC Robotics</h3>
          <Button onClick={handleFTCClick} color="custom">
            View Video
          </Button>
        </div>
        <div className="col-md-4">
          <h3>Day Travel Map</h3>
          <Button onClick={handleDayTravelMapClick} color="custom">
            View Project
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ResumeProjectsSection;
