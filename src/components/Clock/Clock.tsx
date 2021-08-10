import React from "react";
import Hour from "../Hour";
import Minute from "../Minute";
import Second from "../Second";
import "./Clock.scss";

const Clock: React.FC = () => {
  return (
    <div className="Clock">
      <Hour />
      <Minute />
      <Second />
    </div>
  );
};

export default Clock;
