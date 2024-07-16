import "./Formulario.css";

import CampoTexto from "./../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const grupos = ["Frontend", "Backend", "Ui/UX", "Devops"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [grupo, setGrupo] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    props.aoCadastrarUsuario({
      nome,
      cargo,
      imagem,
      grupo,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o membro</h2>

        <CampoTexto
          valor={nome}
          aoAlterar={setNome}
          label="Nome"
          obrigatorio
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterar={setCargo}
          obrigatorio
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterar={setImagem}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={grupo}
          aoAlterar={setGrupo}
          label="Grupo"
          obrigatorio
          lista={grupos}
        />

        <Botao>Criar novo Nó</Botao>
      </form>
    </section>
  );
};

export default Formulario;
