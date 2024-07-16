import "./Membro.css";

const Membro = (props) => {
  return (
    <div className="membro">
      <div
        className="superior"
        style={{ backgroundColor: props.corPrimaria }}
      ></div>
      <img
        src="https://github.com/leonardobandeira.png"
        alt="Leonardo Bandeira"
      />
      <div className="inferior">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Membro;
