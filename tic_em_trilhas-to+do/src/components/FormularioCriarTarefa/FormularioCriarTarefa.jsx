import { Botao } from "../Botao/Botao"
import { CampoTexto } from "../CampoTexto"

const FormularioCriarTarefa = () => {
    return (
        <form action="">
            <CampoTexto />
            <Botao texto='+' />
        </form>
    )
}

export { FormularioCriarTarefa }