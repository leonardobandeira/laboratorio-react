import Membro from "../Membro";
import "./Grupo.css";

const Grupo = (props) => {
  return (
    <section className="grupo" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <Membro nome={"leonardo"} cargo="Dev" corPrimaria={props.corPrimaria} corSecundaria={props.corSecundaria}/>
    </section>
  );
};

export default Grupo;
