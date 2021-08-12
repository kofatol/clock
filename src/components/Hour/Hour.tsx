import React from "react";
import { ClockChild } from "../../interfaces";
import "./Hour.scss";

const Hour: React.FC<ClockChild> = ({ rotationDegree }) => {
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
