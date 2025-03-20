// Buttons.js

import React from "react";

const Button = ({ children, onClick, color = "primary" }) => {
  return (
    <button 
      className={"btn btn-" + (color !== "custom" ? color : "") + (color === "custom" ? " btn-custom" : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
