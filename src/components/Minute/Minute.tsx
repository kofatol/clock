import React from "react";
import ClockChild from "../../interfaces/ClockChild";
import "./Minute.scss";

const Minute: React.FC<ClockChild> = ({ turnDegree }) => {
  return (
    <div className="Minute">
      <div
        className="Minute__mn"
        style={{ transform: `rotateZ(${turnDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Minute;
