import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppConstant = () => {
  const contexto = useContext(AppContext);

  return contexto;
};

export { useAppConstant };
