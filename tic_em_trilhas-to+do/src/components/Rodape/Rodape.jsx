import { Loading } from "../Loading";
import style from "./Rodape.module.css";

const Rodape = (props) => {
  const { criador } = props;

  const anoCorrente = new Date().getFullYear();

  return (
    <div className={style.Rodape}>
      <span>Tic em Trilhas </span> -- {anoCorrente} -- {criador}
      <Loading/>
    </div>
  );
};

export { Rodape };
