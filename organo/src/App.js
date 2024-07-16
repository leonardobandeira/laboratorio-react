import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Grupo from "./componentes/Grupo";

function App() {
  const grupos = [
    {
      grupo: "Frontend",
      corPrimaria: "#BB11AA",
      corSecundaria: "#CCAAAA",
    },
    {
      grupo: "Backend",
      corPrimaria: "#AA9900",
      corSecundaria: "#AACCAA",
    },
    {
      grupo: "Ui/UX",
      corPrimaria: "#E6CCFF",
      corSecundaria: "#F2CC00",
    },
    {
      grupo: "Devops",
      corPrimaria: "#CCAA00",
      corSecundaria: "#E0FACC",
    },
  ];

  const [cadastros, setCadastros] = useState([]);

  const salvarCadastro = (dados) => {
    setCadastros([...cadastros, dados]);
    console.log(cadastros);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map((item) => item.grupo)}
        aoCadastrarUsuario={(dados) => salvarCadastro(dados)}
      />

      {grupos.map((g) => (
        <Grupo
          nome={g.grupo}
          corPrimaria={g.corPrimaria}
          corSecundaria={g.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
