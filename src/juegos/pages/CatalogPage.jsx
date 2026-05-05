import { Link, useParams } from "react-router-dom";
import { games } from "../data/games";
import { GameCard } from "../components/GameCard";

const platformLabels = {
  playstation: "PlayStation",
  xbox: "Xbox",
  nintendo: "Nintendo",
};

export const CatalogPage = () => {
  const { platform } = useParams();
  const platformKey = platform?.toLowerCase();
  const platformLabel = platformLabels[platformKey];

  const filteredGames = games.filter(
    (game) => game.platform.toLowerCase() === platformLabel?.toLowerCase()
  );

  if (!platformLabel) {
    return (
      <div className="container py-4">
        <h1 className="mb-3">Catalog</h1>
        <p className="text-muted">Invalid platform.</p>
        <Link to="/home" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Games for {platformLabel}</h1>

      <div className="row g-3">
        {filteredGames.map((game) => (
          <div className="col-12" key={game.id}>
            <GameCard {...game} />
          </div>
        ))}
      </div>
    </div>
  );
};