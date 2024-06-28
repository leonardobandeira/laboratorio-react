import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";
import { useAppContext } from "./../../hooks";

const ListaTarefas = () => {
  const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefa}>
      {tarefas.length === 0 && <p>Não há tarefas cadastradas...</p>}

      {tarefas.map((item, index) => (
        <ListaTarefasItem key={index} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
