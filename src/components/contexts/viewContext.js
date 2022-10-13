import { createContext, useContext, useState } from "react";

export const ViewContext = createContext("default");

export const ViewProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("default");

  const updateViewMode = (stateStr) => {
    setViewMode(stateStr);
  };

  return (
    <ViewContext.Provider value={{ viewMode, updateViewMode }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  const viewState = useContext(ViewContext);

  return viewState;
};
