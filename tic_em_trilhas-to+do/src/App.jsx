import './App.css'

import { Cabecalho, Conteudo } from './components';

const App = () => {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <h1>Conteudo</h1>
      </Conteudo>
    </>
  )
};

export { App };