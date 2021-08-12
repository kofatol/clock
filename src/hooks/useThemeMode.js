import { useState } from "react";

const useThemeMode = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const onThemeChange = () => {
    setIsLightMode((prevState) => !prevState);
  };

  return { isLightMode, onThemeChange };
};

export default useThemeMode;
