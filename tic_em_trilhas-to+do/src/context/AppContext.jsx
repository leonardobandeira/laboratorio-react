import { useState, createContext, useEffect } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador, setCriador] = useState("Leonardo Bandeira");
  const [tarefas, setTarefas] = useState([]);

  const [loadCriar, setLoadCriar] = useState(false);
  const [loadEditar, setLoadEditar] = useState(false);
  const [loadDeletar, setLoadDeletar] = useState(null);
  const [loadCarregar, setLoadCarregar] = useState(null);

  const carregarTarefas = async () => {
    setLoadCarregar(true);
    const { data = [] } = await api.get("tarefas");

    setTarefas([...data]);

    setLoadCarregar(false);
  };

  const adicionarTarefa = async (nomeTarefa) => {
    setLoadCriar(true);
    const { data: tarefa } = await api.post("tarefas", {
      nome: nomeTarefa,
    });

    setTarefas((listaOld) => {
      return [...listaOld, tarefa];
    });

    setLoadCriar(false);
  };

  const editarTarefa = async (id, nomeTarefa) => {
    setLoadEditar(id);
    const { data: tarefaAtualizada } = await api.put(`tarefas/${id}`, {
      nome: nomeTarefa,
    });

    setTarefas((estadoAtual) => {
      const tarefasAtualizadas = estadoAtual.map((item) => {
        return item.id === id
          ? {
              ...item,
              nome: tarefaAtualizada.nome,
            }
          : item;
      });

      return tarefasAtualizadas;
    });
    setLoadEditar(null);
  };

  const removerTarefa = async (id) => {
    setLoadDeletar(id);
    await api.delete(`tarefas/${id}`);

    setTarefas((estadoAtual) => {
      const listaAtualizada = estadoAtual.filter((tarefa) => tarefa.id !== id);

      return [...listaAtualizada];
    });

    setLoadDeletar(null);
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{
        criador,
        tarefas,
        adicionarTarefa,
        editarTarefa,
        removerTarefa,

        loadCriar,
        loadCarregar,
        loadDeletar,
        loadEditar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
