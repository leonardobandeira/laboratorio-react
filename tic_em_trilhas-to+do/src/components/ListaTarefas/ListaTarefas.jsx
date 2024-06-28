import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";
import { Loading } from "../Loading";
import { useAppContext } from "./../../hooks";

const ListaTarefas = () => {
  const { tarefas, loadCarregar } = useAppContext();

  return (
    <ul className={style.ListaTarefa}>
      {loadCarregar && (
        <p>
          <Loading /> Carregando...
        </p>
      )}

      {!loadCarregar && tarefas.length === 0 && (
        <p>Não há tarefas cadastradas...</p>
      )}

      {tarefas.map((item, index) => (
        <ListaTarefasItem key={index} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
