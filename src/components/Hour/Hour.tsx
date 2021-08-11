import React from "react";
import { ClockChild } from "../../interfaces";
import "./Hour.scss";

const Hour: React.FC<ClockChild> = ({ turnDegree }) => {
  return (
    <div className="Hour">
      <div
        className="Hour__hr"
        style={{ transform: `rotateZ(${turnDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Hour;
