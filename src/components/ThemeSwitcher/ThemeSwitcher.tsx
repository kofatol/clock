import React from "react";
import "./ThemeSwitcher.scss";

interface ThemeSwitcherProps {
  onClick: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
  return (
    <div className="ThemeSwitcher ThemeSwitcher_dark" onClick={onClick}>
      {/* <div className="ThemeSwitcher ThemeSwitcher_light"> */}
      <span className="ThemeSwitcher__text">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
