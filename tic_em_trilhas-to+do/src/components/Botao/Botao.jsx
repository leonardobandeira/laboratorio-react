const Botao = (props) => {
    const { texto, tipo = 'primario', outrasProps } = props
    return (
        <button tipo={tipo} {...outrasProps}>
            {texto}
        </button>
    )
}

export { Botao }