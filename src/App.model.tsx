import React from "react";

interface AppContextProps {
  isLightMode: boolean;
}

const AppContext = React.createContext<Partial<AppContextProps>>({});

export { AppContext };
