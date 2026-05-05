import { Link, useParams } from "react-router-dom";
import { games } from "../data/games";
import { GamesCard } from "../components/GamesCard";
import "./CatalogPage.css";

const platformLabels = {
  playstation: "PlayStation",
  xbox: "Xbox",
  nintendo: "Nintendo",
};

const platformColors = {
  playstation: { color: "#2b7ef9" },
  xbox: { color: "#107c10" },
  nintendo: { color: "#e60012" },
};

export const CatalogPage = () => {
  const { platform } = useParams();
  const platformKey = platform?.toLowerCase();
  const platformLabel = platformLabels[platformKey];
  const platformStyle = platformColors[platformKey];

  const filteredGames = games.filter(
    (game) => game.platform.toLowerCase() === platformLabel?.toLowerCase()
  );

  if (!platformLabel) {
    return (
      <div className="catalog-error">
        <div className="container">
          <h1>Catalog</h1>
          <p className="text-muted">Invalid platform.</p>
          <Link to="/home" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="catalog-page">
      {/* Header */}
      <div className="catalog-header">
        <div className="container">
          <div className="header-content">
            <div className="platform-badge" style={{ borderColor: platformStyle.color }}>
              <span className="platform-icon">{platformStyle.icon}</span>
              <h1>Juegos de {platformLabel}</h1>
            </div>
            <p className="platform-description">
              Explora los últimos y mejores títulos disponibles en {platformLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="catalog-content">
        <div className="container">
          <div className="games-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GamesCard key={game.id} {...game} />
              ))
            ) : (
              <div className="col-12">
                <p className="text-center text-muted py-5">
                  No se encontraron juegos para esta plataforma
                </p>
              </div>
            )}
          </div>

          {filteredGames.length > 0 && (
            <div className="text-center mt-5 pb-5">
              <Link to="/home" className="btn btn-outline-primary">
                ← Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};