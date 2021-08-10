import React from "react";
import Hour from "../Hour";
import "./Clock.scss";

const Clock: React.FC = () => {
  return (
    <div className="Clock">
      <Hour />
    </div>
  );
};

export default Clock;
