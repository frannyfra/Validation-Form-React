import React, { useState } from "react";
import { ageChecker } from "../../utilities/ageChecker";

const POPUP_STYLES = {
  alignItems: "center",
  backgroundColor: "#fff",
  border: "4px solid ",
  borderImage: "linear-gradient(to left, #00ccff, #cc33ff) 1",
  display: "flex",
  flexDirection: "column",
  fontWeight: 600,
  left: "50%",
  padding: "0.50em 4em 3em 4em",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000
};
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0, .7)",
  zIndex: 1000
};

const BUTTON_STYLES = {
  width: "2em",
  height: "2em",
  backgroundColor: "transparent",
  border: "2px solid",
  borderImage: "linear-gradient(to left, #00ccff, #cc33ff) 1",
  padding: " 0",
  marginBottom: "2.05em",
  marginTop: "1.05em",
  color: "#cc33ff",
  fontSize: "larger"
};

const SubmitMessage = ({ children, open, onClose, age }) => {
  const userAge = ageChecker(age);
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={POPUP_STYLES}>
        <button style={BUTTON_STYLES} onClick={onClose}>
          x
        </button>
        {userAge}
      </div>
    </>
  );
};

export default SubmitMessage;
