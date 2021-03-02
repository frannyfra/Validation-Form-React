import React, { useState } from "react";
import { ageChecker } from "../../utilities/ageChecker";

const SubmitMessage = ({ children, open, onClose, age }) => {
  const userAge = ageChecker(age);
  if (!open) return null;
  return (
    <>
      <div></div>
      <div>
        <button onClick={onClose}>x</button>
        {userAge}
      </div>
    </>
  );
};

export default SubmitMessage;
