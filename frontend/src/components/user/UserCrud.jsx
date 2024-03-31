import React, { Component } from 'react';
import Main from '../templete/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <div className="display-4">Usuários</div>
                <p>Crie um formulário aqui para incluir funcionalidades de CRUD para usuários.</p>
            </Main>
        );
    }
}
