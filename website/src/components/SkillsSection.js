import React from "react";
import ListGroup from "./ListGroup";

function SkillsSection() {
  const languages = ["Python", "C/C++", "Java", "SQL", "JavaScript", "YAML"];
  const frameworks = [
    "NumPy", 
    "LangChain", 
    "Hugging Face", 
    "PyTorch", 
    "Pandas", 
    "Spark", 
    "TensorFlow"
  ];
  const devToolkit = [
    "Azure", 
    "Git", 
    "GitLab",
    "Azure Data Studio", 
    "Linux (Shell Scripting)", 
    "MATLAB"
  ];

  const categories = [
    { heading: "Languages", items: languages },
    { heading: "Frameworks", items: frameworks },
    { heading: "Development Toolkit", items: devToolkit },
  ];

  return (
    <section className="container skills-section py-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="skill-card shadow-lg p-4 rounded-4">
              <ListGroup 
                heading={category.heading} 
                items={category.items} 
                onSelectItem={(item) => console.log(item)} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
