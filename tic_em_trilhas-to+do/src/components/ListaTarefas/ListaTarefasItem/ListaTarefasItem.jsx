import { Botao, TIPO_BOTAO, CampoTexto } from "./../../../components";
import { useAppContext } from "../../../hooks";
import style from "./ListaTarefasItem.module.css";
import { useState } from "react";
import { Loading } from "../../Loading";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [editando, setEditando] = useState(false);
  const [loadDeletar, setLoadDeletar] = useState(null);
  const [loadEditar, setLoadEditar] = useState(null);

  const { editarTarefa, removerTarefa } = useAppContext();

  const handleRemove = async () => {
    setLoadDeletar(id);
    console.log(`Removendo tarefa com id: ${id}`);
    await removerTarefa(id);
    setLoadDeletar(null);
  };

  const loadingEstaEditando = loadEditar === id;
  const loadingEstaDeletando = loadDeletar === id;

  const onBlurTarefa = async (event) => {
    const nomeTarefa = event.currentTarget.value;

    setLoadEditar(id);
    await editarTarefa(id, nomeTarefa);
    setLoadEditar(null);
    setEditando(false);
  };

  return (
    <li className={style.ListaTarefasItem}>
      {editando || loadingEstaEditando ? (
        <CampoTexto defaultValue={nome} autoFocus onBlur={onBlurTarefa} />
      ) : (
        <span onDoubleClick={() => setEditando(true)}>{nome}</span>
      )}

      {loadingEstaEditando && <Loading />}

      <Botao
        texto={loadingEstaDeletando ? <Loading /> : "-"}
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={handleRemove}
      />
    </li>
  );
};

export { ListaTarefasItem };
