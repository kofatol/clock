import React from "react";
import { ClockChild } from "../../interfaces";
import "./Second.scss";

const Second: React.FC<ClockChild> = ({ turnDegree }) => {
  return (
    <div className="Second">
      <div
        className="Second__sc"
        style={{ transform: `rotateZ(${turnDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Second;
