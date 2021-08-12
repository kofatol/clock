import React, { useContext } from "react";
import { AppContext } from "../../App.model";
import { ClockChildProps } from "../../interfaces";
import "./Second.scss";

const Second: React.FC<ClockChildProps> = ({ rotationDegree }) => {
  const { isLightMode } = useContext(AppContext);

  return (
    <div className="Second">
      <div
        className={`Second__sc
          ${isLightMode ? "Second__sc_light" : "Second__sc_dark"}`}
        style={{ transform: `rotateZ(${rotationDegree}deg)` }}
      ></div>
    </div>
  );
};

export default Second;
