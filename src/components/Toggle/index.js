import React from "react";

import "./Toggle.css";

const Toggle = props => {
  const { isOn, handleClick } = props;
  return (
    <div className={`container ${isOn ? "active" : ""}`} onClick={handleClick}>
      <div className="switch" />
    </div>
  );
};

export default Toggle;
