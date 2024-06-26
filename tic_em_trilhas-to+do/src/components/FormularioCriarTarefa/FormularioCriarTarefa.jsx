import style from "./FormularioCriarTarefa.module.css";

import { useState } from "react";
import { useAppContext } from "../../hooks";

import { Botao } from "../Botao/Botao";
import { CampoTexto } from "../CampoTexto";

const FormularioCriarTarefa = () => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { adicionarTarefa } = useAppContext();

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const submeterFormulario = (event) => {
    event.preventDefault();

    if (!nomeTarefa) return;

    adicionarTarefa(nomeTarefa);

    setNomeTarefa("");
  };
  return (
    <form className={style.FormularioCriarTarefa} onSubmit={submeterFormulario}>
      <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
      <Botao texto="+" />
    </form>
  );
};

export { FormularioCriarTarefa };
