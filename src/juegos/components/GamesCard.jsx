import { Link } from "react-router-dom"
import "./GamesCard.css"

export const GamesCard = ({ id, name, genre, price, platform }) => {
  const imageSrc = `/assets/juegos/${id}.jpg`

  return (
    <article className="games-card">
      <div className="games-image-wrapper">
        <img src={imageSrc} alt={name} className="games-image" />
        <div className="games-overlay">
          <Link to={`/juego/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>

      <div className="games-info">
        <div className="games-platform">{platform}</div>
        <h4 className="games-title">{name}</h4>
        <p className="games-genre">{genre}</p>

        <div className="games-footer">
          <span className="games-price">${price.toFixed(2)}</span>
          <Link to={`/juego/${id}`} className="games-action" aria-label={`View details for ${name}`}>
            →
          </Link>
        </div>
      </div>
    </article>
  )
}