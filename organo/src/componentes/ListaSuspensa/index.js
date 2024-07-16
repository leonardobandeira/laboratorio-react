import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={(e) => props.aoAlterar(e.target.value)}
        required={props.obrigatorio}
      >
        {props.lista.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
