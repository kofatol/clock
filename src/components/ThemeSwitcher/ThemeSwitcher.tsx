import React from "react";
import "./ThemeSwitcher.scss";

const ThemeSwitcher: React.FC = () => {
  return (
    <div className="ThemeSwitcher ThemeSwitcher_dark">
    {/* <div className="ThemeSwitcher ThemeSwitcher_light"> */}
      <span className="ThemeSwitcher__text">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
