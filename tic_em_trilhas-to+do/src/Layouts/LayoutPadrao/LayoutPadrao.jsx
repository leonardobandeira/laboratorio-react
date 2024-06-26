import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useAppConstant } from "../../hooks/useAppContext";

const LayoutPadrao = () => {
  const { criador } = useAppConstant();
  
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Outlet />
      </Conteudo>
      <Rodape criador={criador} />
    </>
  );
};

export { LayoutPadrao };
