import style from './Botao.module.css'
import { TIPO_BOTAO } from './Constantes'

const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.PRIMARIO, outrasProps } = props
    return (
        <button
            className={style.Botao}
            tipo={tipo}
            {...outrasProps}
        >
            {texto}
        </button>
    )
}

export { Botao }