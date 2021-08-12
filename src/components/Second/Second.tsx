import React from "react";
import { ClockChild } from "../../interfaces";
import "./Second.scss";

const Second: React.FC<ClockChild> = ({ rotationDegree }) => {
  return (
    <div className="Second">
      <div
        className="Second__sc"
        style={{ transform: `rotateZ(${rotationDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Second;
