import './App.css'

import { Cabecalho, Conteudo, Rodape } from './components';

import { Inicial } from './pages';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h1>Conteudo</h1>
        <Inicial />
      </Conteudo>
      <Rodape criador="Leoanrdo Bandeira" />
    </>
  )
};

export { App };