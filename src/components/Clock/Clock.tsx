import React from "react";
import { useTime } from "./hooks";
import Hour from "../Hour";
import Minute from "../Minute";
import Second from "../Second";
import "./Clock.scss";

const Clock: React.FC = () => {
  const { hh, mm, ss } = useTime();

  return (
    <div className="Clock">
      <Hour rotationDegree={hh + mm / 12} />
      <Minute rotationDegree={mm} />
      <Second rotationDegree={ss} />
    </div>
  );
};

export default Clock;
