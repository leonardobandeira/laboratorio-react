import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Leonardo" />
    </div>
    , document.getElementById('root')
)