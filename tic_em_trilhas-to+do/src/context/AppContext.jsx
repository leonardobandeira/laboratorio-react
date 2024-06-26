import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");

  return (
    <AppContext.Provider value={{ criador }}>{children}</AppContext.Provider>
  );
};
