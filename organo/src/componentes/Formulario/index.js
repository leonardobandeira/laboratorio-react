import "./Formulario.css";

import CampoTexto from "./../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("Aqui na submissão")
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o membro</h2>

        <CampoTexto obrigatorio label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio label="Grupo" lista={["teste", "teste2"]} />

        <Botao>Criar novo Nó</Botao>
      </form>
    </section>
  );
};

export default Formulario;
