import style from './ListaTarefas.module.css'
import { ListaTarefasItem } from './ListaTarefasItem/ListaTarefasItem';

const ListaTarefas = () => {
  return (
    <ul className={style.ListaTarefa}>
      <ListaTarefasItem nome="Item 1"/>
      <ListaTarefasItem nome="Item 2"/>
      <ListaTarefasItem nome="Item 3"/>
    </ul>
  );
};

export { ListaTarefas };
