import React, {Fragment} from 'react'

export default props => {
    return <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve</h2>
    </Fragment>
}

// export default props => {
//     return [
//         <h1>Bom dia {props.nome}!</h1>,
//         <h2>Até breve</h2>
//     ]
// }

// export default props => {
//     return <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve</h2>
//     </div>
// }