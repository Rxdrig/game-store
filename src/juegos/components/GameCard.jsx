import "./GameCard.css"

export const GameCard = ({ game, platformData }) => {
  if (!game) {
    return null
  }

  const imageSrc = `/assets/juegos/${game.id}.jpg`

  return (
    <article className="detail-game-card">
      <div className="detail-game-image-wrapper">
        <img src={imageSrc} alt={game.name} className="detail-game-image" />
      </div>

      <div className="detail-game-info">
        <div
          className="detail-platform-badge"
          style={{ borderColor: platformData?.color }}
        >
          <span className="detail-platform-icon">{platformData?.label}</span>
          <span className="detail-platform-name">{game.platform}</span>
        </div>

        <h2 className="detail-game-title">{game.name}</h2>
        <p className="detail-game-genre">{game.genre}</p>

        <div className="detail-game-footer">
          <span className="detail-game-price">${game.price.toFixed(2)}</span>
          <span className="detail-game-note">Disponible</span>
        </div>
      </div>
    </article>
  )
}