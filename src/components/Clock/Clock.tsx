import React from "react";
import Hour from "../Hour";
import Minute from "../Minute";
import "./Clock.scss";

const Clock: React.FC = () => {
  return (
    <div className="Clock">
      <Hour />
      <Minute />
    </div>
  );
};

export default Clock;
