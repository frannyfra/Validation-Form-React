import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {" "}
      {name}{" "}
    </button>
  );
};

export default Button;
