import style from "./ListaTarefas.module.css";
import { ListaTarefasItem } from "./ListaTarefasItem/ListaTarefasItem";

const ListaTarefas = () => {
  const lista = [
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
  ];
  return (
    <ul className={style.ListaTarefa}>
      {lista.map( item => <ListaTarefasItem key={item.id} nome={item.nome}/>)}
    </ul>
  );
};

export { ListaTarefas };
