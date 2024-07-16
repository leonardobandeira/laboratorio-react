import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [cadastros, setCadastros] = useState([]);

  const salvarCadastro = (dados) => {
    setCadastros([...cadastros, dados]);
    console.log(cadastros);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarUsuario={(dados) => salvarCadastro(dados)} />
      <Time nome="Programação" />
    </div>
  );
}

export default App;
