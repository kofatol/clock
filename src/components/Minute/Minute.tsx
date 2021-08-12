import React, { useContext } from "react";
import { AppContext } from "../../App.model";
import { ClockChildProps } from "../../interfaces";
import "./Minute.scss";

const Minute: React.FC<ClockChildProps> = ({ rotationDegree }) => {
  const { isLightMode } = useContext(AppContext);

  return (
    <div className="Minute">
      <div
        className={`Minute__mn
          ${isLightMode ? "Minute__mn_light" : "Minute__mn_dark"}`}
        style={{ transform: `rotateZ(${rotationDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Minute;
