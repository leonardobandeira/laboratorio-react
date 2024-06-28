import { Botao, TIPO_BOTAO, CampoTexto } from "./../../../components";
import { useAppContext } from "../../../hooks";
import style from "./ListaTarefasItem.module.css";
import { useState } from "react";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [editando, setEditando] = useState(false);

  const { editarTarefa, removerTarefa } = useAppContext();

  const handleRemove = () => {
    console.log(`Removendo tarefa com id: ${id}`);
    removerTarefa(id);
  };

  const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;

    editarTarefa(id, nomeTarefa);
    setEditando(false);
  };

  return (
    <li className={style.ListaTarefasItem}>
      {editando && (
        <CampoTexto defaultValue={nome} autoFocus onBlur={onBlurTarefa} />
      )}

      {!editando && <span onDoubleClick={() => setEditando(true)}>{nome}</span>}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={console.log("teste")}
      />
    </li>
  );
};

export { ListaTarefasItem };
