import "./index.css";

function TituloPagina(props) {

  return (
    <div className="d-flex flex-start p-3">
      <h1 className="pm ms-5">{props.titulo}</h1>
    </div>
  );
}

export default TituloPagina;
