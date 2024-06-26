import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";
import { useAppContext } from './../../hooks'

const ListaTarefas = () => {
    const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefa}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };
