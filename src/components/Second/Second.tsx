import React from "react";
import { ClockChildProps } from "../../interfaces";
import "./Second.scss";

const Second: React.FC<ClockChildProps> = ({ rotationDegree }) => {
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
