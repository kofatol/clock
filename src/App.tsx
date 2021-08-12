import React from "react";
import Clock from "./components/Clock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.scss";

const App: React.FC = () => {
  return (
    // <div className="App App_dark">
    <div className="App App_light">
      <ThemeSwitcher />
      <Clock />
    </div>
  );
};

export default App;
