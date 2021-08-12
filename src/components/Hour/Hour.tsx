import React from "react";
import { ClockChildProps } from "../../interfaces";
import "./Hour.scss";

const Hour: React.FC<ClockChildProps> = ({ rotationDegree }) => {
  return (
    <div className="Hour">
      <div
        className="Hour__hr"
        style={{ transform: `rotateZ(${rotationDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Hour;
