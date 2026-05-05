import { Link } from "react-router-dom"

export const GameCard = ({ id, name, genre }) => {
  const imageSrc = `/assets/juegos/${id}.jpg`

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img src={imageSrc} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">{name}</div>
            <div className="card-text">Genre: {genre}</div>
            <Link to={`/juego/${id}`}> see more... </Link>
          </div>
        </div>
      </div>
    </div>
  )
}