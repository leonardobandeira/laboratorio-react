import "./Grupo.css";

const Grupo = (props) => {
  return (
    <section className="grupo" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
    </section>
  );
};

export default Grupo;
