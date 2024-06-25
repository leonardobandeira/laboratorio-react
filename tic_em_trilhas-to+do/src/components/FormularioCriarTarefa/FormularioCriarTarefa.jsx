import style from "./FormularioCriarTarefa.module.css";

import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto";
import { useState } from "react";

const FormularioCriarTarefa = (props) => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { setTarefas } = props;

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
