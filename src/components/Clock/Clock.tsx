import React, { useContext } from "react";
import { useTime } from "./hooks";
import Hour from "../Hour";
import Minute from "../Minute";
import Second from "../Second";
import Spinner from "../Spinner";
import { AppContext } from "../../App.model";
import "./Clock.scss";

const Clock: React.FC = () => {
  const { hh, mm, ss } = useTime();
  const { isLightMode } = useContext(AppContext);

  return (
    <>
      {!hh ? (
        <Spinner />
      ) : (
        <div
          className={`Clock
          ${isLightMode ? "Clock_light" : "Clock_dark"}`}
        >
          <Hour rotationDegree={hh + mm / 12} />
          <Minute rotationDegree={mm} />
          <Second rotationDegree={ss} />
        </div>
      )}
    </>
  );
};

export default Clock;
