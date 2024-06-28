import { Botao, TIPO_BOTAO } from "../../Botao";
import { useAppContext } from "../../../hooks";
import style from "./ListaTarefasItem.module.css";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const { removerTarefa } = useAppContext();

  const handleRemove = () => {
    console.log(`Removendo tarefa com id: ${id}`);
    removerTarefa(id);
  };

  return (
    <li className={style.ListaTarefasItem}>
      {nome}
      <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} onClick={console.log("teste")} />
    </li>
  );
};

export { ListaTarefasItem };
