import React from "react";
import './Home.css'
import Main from '../templete/Main'

export default props =>
    <Main icon="home" title="Início" subtitle="CRUD em React">
        <div className="display-4"> Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema de CRUD em Readc</p>
    </Main>