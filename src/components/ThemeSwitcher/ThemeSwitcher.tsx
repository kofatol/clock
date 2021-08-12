import React, { useContext } from "react";
import { AppContext } from "../../App.model";
import "./ThemeSwitcher.scss";

interface ThemeSwitcherProps {
  onClick: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
  const { isLightMode } = useContext(AppContext);

  return (
    <div
      onClick={onClick}
      className={`ThemeSwitcher
      ${isLightMode ? "ThemeSwitcher_light" : "ThemeSwitcher_dark"}`}
    >
      <span className="ThemeSwitcher__text">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
