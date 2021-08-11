import React, { useState } from "react";
import Hour from "../Hour";
import Minute from "../Minute";
import Second from "../Second";
import "./Clock.scss";

const Clock: React.FC = () => {
  const deg = 6;
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);

  setInterval(() => {
    const day = new Date();
    setHh(() => day.getHours() * 30);
    setMm(() => day.getMinutes() * deg);
    setSs(() => day.getSeconds() * deg);
  }, 500);

  return (
    <div className="Clock">
      <Hour turnDegree={hh + mm / 12} />
      <Minute turnDegree={mm} />
      <Second turnDegree={ss} />
    </div>
  );
};

export default Clock;
