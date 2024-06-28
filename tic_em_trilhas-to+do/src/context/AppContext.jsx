import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");
  const [nextId, setNextId] = useState(1);

  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (nomeTarefa) => {
    setTarefas((listaOld) => {
      const tarefa = {
        id: nextId,
        nome: nomeTarefa + ' - ' + nextId,
      };

      setNextId(nextId + 1);

      return [...listaOld, tarefa];
    });
  };

  const removerTarefa = (id) => {
    setTarefas((estadoAtual) => {
      const listaAtualizada = estadoAtual.filter((tarefa) => tarefa.id !== id);

      return [...listaAtualizada];
    });
  };
 
  return (
    <AppContext.Provider
      value={{ criador, tarefas, adicionarTarefa, removerTarefa }}
    >
      {children}
    </AppContext.Provider>
  );
};
