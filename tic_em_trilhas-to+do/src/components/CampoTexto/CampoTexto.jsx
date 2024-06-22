import style from './CampoTexto.module.css'

const CampoTexto = (props) => {
    return (
        <input {...props} className={style.CampoTexto} />
    )
}

export { CampoTexto }