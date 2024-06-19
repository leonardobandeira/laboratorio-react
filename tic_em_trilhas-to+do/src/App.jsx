import './App.css'

import { Cabecalho, Conteudo, Rodape } from './components';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h1>Conteudo</h1>
      </Conteudo>
      <Rodape criador="Leoanrdo Bandeira" />
    </>
  )
};

export { App };