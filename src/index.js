import React from 'react'
import ReactDOM from 'react-dom'

// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Leonardo"/>
        <Multi.BoaNoite nome="Bandeira"/>
    </div>
    , document.getElementById('root')
)