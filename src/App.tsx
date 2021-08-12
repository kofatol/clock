import React from "react";
import Clock from "./components/Clock";
import { AppContext } from "./App.model";
import { useThemeMode } from "./hooks";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.scss";

const App: React.FC = () => {
  const { isLightMode, onThemeChange } = useThemeMode();

  return (
    <div
      className={`App
      ${isLightMode ? "App_light" : "App_dark"}`}
    >
      <AppContext.Provider value={{ isLightMode }}>
        <ThemeSwitcher onClick={onThemeChange} />
        <Clock />
      </AppContext.Provider>
    </div>
  );
};

export default App;
