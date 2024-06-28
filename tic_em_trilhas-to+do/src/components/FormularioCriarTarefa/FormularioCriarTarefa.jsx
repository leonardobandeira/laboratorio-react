import style from "./FormularioCriarTarefa.module.css";

import { useState } from "react";
import { useAppContext } from "../../hooks";

import { Botao, CampoTexto, Loading } from "./../../components";

const FormularioCriarTarefa = () => {
  const [nomeTarefa, setNomeTarefa] = useState("");
  const { adicionarTarefa, loadCriar } = useAppContext();

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
      <Botao texto={loadCriar ? <Loading /> : "+"} />
    </form>
  );
};

export { FormularioCriarTarefa };
