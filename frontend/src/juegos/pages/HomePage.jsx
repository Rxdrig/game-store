import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { GamesCard } from "../components/GamesCard";
import { HeroCarousel } from "../components/HeroCarousel";
import { useGames } from "../hooks/useGames";
import "./HomePage.css";

const featuredGameIds = ["ps3", "nt3", "xb2", "ps1", "nt1", "xb5", "ps2", "xb1"];

const platformClassName = {
  PlayStation: "playstation-badge",
  Xbox: "xbox-badge",
  Nintendo: "nintendo-badge",
};

const getFeaturedGames = (games = []) => {
  return featuredGameIds
    .map((gameId) => games.find((game) => game.id === gameId))
    .filter(Boolean);
};

export const HomePage = () => {
  const { games, loading, error } = useGames();
  const featuredGames = getFeaturedGames(games);
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [priceOrder, setPriceOrder] = useState("asc");

  const availableGenres = useMemo(
    () => [...new Set(games.map((game) => game.genre))].sort((left, right) => left.localeCompare(right, "es")),
    [games]
  );

  const filteredGames = useMemo(() => {
    const normalizedPlatform = selectedPlatform.toLowerCase();

    return [...games]
      .filter((game) => {
        const matchesPlatform = normalizedPlatform === "all" || game.platform.toLowerCase() === normalizedPlatform;
        const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;

        return matchesPlatform && matchesGenre;
      })
      .sort((left, right) => (priceOrder === "asc" ? left.price - right.price : right.price - left.price));
  }, [games, priceOrder, selectedGenre, selectedPlatform]);

  const resetFilters = () => {
    setSelectedPlatform("all");
    setSelectedGenre("all");
    setPriceOrder("asc");
  };

  const filteredPlatforms = ["playstation", "nintendo", "xbox"];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-carousel-wrapper">
          <HeroCarousel />
        </div>
        <div className="hero-info">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="hero-info-title">¡Explora Nustra Colección!</h2>
                <p className="hero-info-subtitle">
                  Descubre los últimos títulos de PlayStation, Xbox y Nintendo
                  en un solo lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="cta-eyebrow">Favoritos de la comunidad</div>
              <h2 className="mb-3">Descubre los juegos más populares</h2>
              <p className="cta-copy mb-4">
                Explora una selección de los títulos más buscados.
              </p>

              <div className="popular-games-marquee" aria-label="Juegos populares destacados">
                <div className="popular-games-track">
                  {[...featuredGames, ...featuredGames].map((game, index) => (
                    <Link
                      key={`${game.id}-${index}`}
                      className="popular-game-card"
                      to={`/juego/${game.id}`}
                    >
                      <div className="popular-game-cover">
                        <img
                          src={new URL(`../../../assets/juegos/${game.id}.jpg`, import.meta.url).href}
                          alt={game.name}
                          className="popular-game-image"
                        />
                      </div>
                      <div className="popular-game-content">
                        <span className={`popular-game-badge ${platformClassName[game.platform] || ""}`}>
                          {game.platform}
                        </span>
                        <h3>{game.name}</h3>
                        <p>{game.genre}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section - lists by platform */}
      <section className="platforms-section py-5">
        <div className="container">
          <div className="platforms-layout">
            <div className="platforms-content">
              <div className="platforms-header">
                <h2 className="section-title mb-0">Busca por plataforma</h2>

                <aside className="filters-panel">
                  <div className="filters-row">
                    <div className="filter-field">
                      <label htmlFor="platform-filter">Plataforma</label>
                      <select
                        id="platform-filter"
                        className="filter-select"
                        value={selectedPlatform}
                        onChange={(event) => setSelectedPlatform(event.target.value)}
                      >
                        <option value="all">Todas</option>
                        <option value="playstation">PlayStation</option>
                        <option value="nintendo">Nintendo</option>
                        <option value="xbox">Xbox</option>
                      </select>
                    </div>

                    <div className="filter-field">
                      <label htmlFor="genre-filter">Tipo</label>
                      <select
                        id="genre-filter"
                        className="filter-select"
                        value={selectedGenre}
                        onChange={(event) => setSelectedGenre(event.target.value)}
                      >
                        <option value="all">Todos</option>
                        {availableGenres.map((genre) => (
                          <option key={genre} value={genre}>
                            {genre}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="filter-field">
                      <label htmlFor="price-filter">Precio</label>
                      <select
                        id="price-filter"
                        className="filter-select"
                        value={priceOrder}
                        onChange={(event) => setPriceOrder(event.target.value)}
                      >
                        <option value="asc">Menor a mayor</option>
                        <option value="desc">Mayor a menor</option>
                      </select>
                    </div>

                    <button type="button" className="filter-reset" onClick={resetFilters}>
                      Limpiar
                    </button>
                  </div>
                </aside>
              </div>

              {loading && <p className="text-muted">Cargando juegos...</p>}
              {error && <p className="text-danger">{error}</p>}

              {!loading && !error && filteredGames.length === 0 && (
                <p className="text-muted">No hay juegos que coincidan con esos filtros.</p>
              )}

              {filteredPlatforms.map((platform) => {
                const platformLabel = platform === "playstation" ? "PlayStation" : platform === "nintendo" ? "Nintendo" : "Xbox";
                const platformGames = filteredGames.filter((game) => game.platform.toLowerCase() === platform);

                if (platformGames.length === 0) {
                  return null;
                }

                return (
                  <div className="platform-block mb-5" key={platform}>
                    <h3 className="platform-heading">{platformLabel}</h3>
                    <div className="games-grid">
                      {platformGames.map((game) => (
                        <GamesCard key={game.id} {...game} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
