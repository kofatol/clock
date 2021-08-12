import React from "react";
import { ClockChild } from "../../interfaces";
import "./Minute.scss";

const Minute: React.FC<ClockChild> = ({ rotationDegree }) => {
  return (
    <div className="Minute">
      <div
        // className="Minute__mn Minute__mn_dark"
        className="Minute__mn Minute__mn_light"
        style={{ transform: `rotateZ(${rotationDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Minute;
