import React from "react";
import "./button.css";

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {" "}
      {name}{" "}
    </button>
  );
};

export default Button;
