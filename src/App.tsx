import React, { useState } from "react";
import Clock from "./components/Clock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.scss";

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const onThemeChange = () => {
    setIsLightMode((prevState) => !prevState);
    console.log("clicked");
  };

  return (
    // <div className="App App_dark">
    <div className="App App_light">
      <ThemeSwitcher onClick={onThemeChange} />
      <Clock />
    </div>
  );
};

export default App;
