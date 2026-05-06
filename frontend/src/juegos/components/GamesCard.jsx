import { Link } from "react-router-dom"
import { useCart } from "../../ui/context/CartContext"
import "./GamesCard.css"

export const GamesCard = ({ id, name, genre, price, platform }) => {
  const imageSrc = new URL(`../../../assets/juegos/${id}.jpg`, import.meta.url).href
  const { addToCart, openDrawer } = useCart()

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
          <button
            type="button"
            className="games-action"
            aria-label={`Add ${name} to cart`}
            onClick={() => {
              addToCart({ id, name, price, platform })
              openDrawer()
            }}
          >
            →
          </button>
        </div>
      </div>
    </article>
  )
}