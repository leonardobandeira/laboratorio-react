import "./Formulario.css";

import CampoTexto from "./../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o membro</h2>

        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Grupo" lista={["teste", "teste2"]} />

        <Botao>Criar novo Nó</Botao>
      </form>
    </section>
  );
};

export default Formulario;
