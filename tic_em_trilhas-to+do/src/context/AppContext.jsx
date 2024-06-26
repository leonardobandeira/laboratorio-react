import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");

  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
  ]);

  const adicionarTarefa = (nomeTarefa) => {
    setTarefas((listaOld) => {
      const tarefa = {
        id: listaOld.length,
        nome: nomeTarefa,
      };

      return [...listaOld, tarefa];
    });
  };

  return (
    <AppContext.Provider value={{ criador, tarefas, adicionarTarefa }}>
      {children}
    </AppContext.Provider>
  );
};
