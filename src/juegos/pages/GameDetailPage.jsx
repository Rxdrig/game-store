import { useNavigate, useParams } from "react-router-dom"
import { getGameById } from "../helpers/getGameById"

export const GameDetailPage = () => {
  const { id } = useParams()
  const game = getGameById(id)
  const navigate = useNavigate()

  const handleReturn = () => {
    if (game.platform === "PlayStation") {
      navigate("/catalog/playstation")
    } else if (game.platform === "Nintendo") {
      navigate("/catalog/nintendo")
    } else {
      navigate("/catalog/xbox")
    }
  }

  return (
    <>
      {game ? (
        <div className="card">
          <img src={`/assets/juegos/${game.id}.jpg`} alt={game.name} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{game.genre}</p>
            <p className="card-text">{game.price}</p>
            <p className="card-text">{game.description}</p>
          </div>
          <div className="button-container">
            <button className="btn btn-primary" onClick={handleReturn}>
              Back
            </button>
          </div>
        </div>
      ) : (
        <h1>The game does not exist</h1>
      )}
    </>
  )
}