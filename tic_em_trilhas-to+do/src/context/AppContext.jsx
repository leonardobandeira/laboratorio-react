import { useState, createContext, useEffect } from "react";
import { api } from '../services/api'

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");
  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = async () => {
    const { data = [] } = await api.get('/tarefas')

    setTarefas([
      ...data
    ])
  };

  const adicionarTarefa = async (nomeTarefa) => {
    const { data: tarefa } = await api.post('/tarefas', {
      nome: nomeTarefa
    })

    setTarefas((listaOld) => {
      return [...listaOld, tarefa];
    });
  };

  const editarTarefa = (id, nomeTarefa) => {
    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((item) => {
        return item.id === id
          ? {
              ...item,
              nome: nomeTarefa,
            }
          : item;
      });

      return tarefasAtualizadas;
    });
  };

  const removerTarefa = (id) => {

    setTarefas((estadoAtual) => {
      const listaAtualizada = estadoAtual.filter((tarefa) => tarefa.id !== id);

      return [...listaAtualizada];
    });
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{ criador, tarefas, adicionarTarefa, editarTarefa, removerTarefa }}
    >
      {children}
    </AppContext.Provider>
  );
};
