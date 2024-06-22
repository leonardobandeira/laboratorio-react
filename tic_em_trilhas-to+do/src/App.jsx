import './App.css'

import { Cabecalho, Conteudo, FormularioCriarTarefa, Rodape } from './components';

import { Inicial } from './pages';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h1>Conteudo</h1>
        <Inicial />
        <FormularioCriarTarefa />
      </Conteudo>
      <Rodape criador="Leoanrdo Bandeira" />
    </>
  )
};

export { App };