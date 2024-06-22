import style from './FormularioCriarTarefa.module.css'

import { Botao } from "../Botao/Botao"
import { CampoTexto } from "../CampoTexto"

const FormularioCriarTarefa = () => {
    return (
        <form 
            action=""
            className={style.FormularioCriarTarefa}
        >
            <CampoTexto />
            <Botao texto='+' />
        </form>
    )
}

export { FormularioCriarTarefa }