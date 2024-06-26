import { FormularioCriarTarefa, ListaTarefas } from "../../components";
import style from "./Inicial.module.css";

const Inicial = () => {
  return (
    <div className={style.Inicial}>
      <FormularioCriarTarefa />
      <ListaTarefas />
    </div>
  );
};

export { Inicial };
