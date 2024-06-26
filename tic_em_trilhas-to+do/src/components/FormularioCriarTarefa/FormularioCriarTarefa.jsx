import style from "./FormularioCriarTarefa.module.css";

import { useState } from "react";
import { useAppContext } from "../../hooks";

import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto";

const FormularioCriarTarefa = () => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { setTarefas } = useAppContext();

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const adicionarTarefa = (event) => {
    event.preventDefault();

    if (!nomeTarefa) return;

    setTarefas((listaOld) => {
      const tarefa = {
        id: listaOld.length,
        nome: nomeTarefa,
      };

      return [...listaOld, tarefa];
    });

    setNomeTarefa("");
  };
  return (
    <form className={style.FormularioCriarTarefa} onSubmit={adicionarTarefa}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormularioCriarTarefa };
