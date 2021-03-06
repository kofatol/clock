import { useState, useEffect } from "react";

const useTime = () => {
  const deg = 6;
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const day = new Date();
      setHh(() => day.getHours() * 30);
      setMm(() => day.getMinutes() * deg);
      setSs(() => day.getSeconds() * deg);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [hh, mm, ss]);

  return { hh, mm, ss };
};

export default useTime;
