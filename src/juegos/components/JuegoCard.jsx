import { Link } from "react-router-dom";

export const JuegoCard = ({id, nombre, precio, tipo, plataforma, descripcion}) => {
  const imgSrc = `/assets/juegos/${id}.jpg`;
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img src={imgSrc} alt={nombre} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">{nombre}</div>
            <div className="card-text">Género: {tipo}</div>
            <Link to={`/juego/${id}`}> ver más... </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
