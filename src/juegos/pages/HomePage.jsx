import { Link } from "react-router-dom";
import { games } from "../data/games";
import { GamesCard } from "../components/GamesCard";
import { HeroCarousel } from "../components/HeroCarousel";
import "./HomePage.css";

export const HomePage = () => {
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

      {/* Platforms Section - lists by platform */}
      <section className="platforms-section py-5">
        <div className="container">
          <h2 className="section-title mb-4">Busca por plataforma</h2>

          {/* PlayStation Section */}
          <div className="platform-block mb-5">
            <h3 className="platform-heading">PlayStation</h3>
            <div className="games-grid">
              {games
                .filter((g) => g.platform.toLowerCase() === "playstation")
                .map((g) => (
                  <GamesCard key={g.id} {...g} />
                ))}
            </div>
          </div>

          {/* Nintendo Section */}
          <div className="platform-block mb-5">
            <h3 className="platform-heading">Nintendo</h3>
            <div className="games-grid">
              {games
                .filter((g) => g.platform.toLowerCase() === "nintendo")
                .map((g) => (
                  <GamesCard key={g.id} {...g} />
                ))}
            </div>
          </div>

          {/* Xbox Section */}
          <div className="platform-block mb-5">
            <h3 className="platform-heading">Xbox</h3>
            <div className="games-grid">
              {games
                .filter((g) => g.platform.toLowerCase() === "xbox")
                .map((g) => (
                  <GamesCard key={g.id} {...g} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Find Your Next Adventure</h2>
              <p className="mb-4 text-muted">
                Browse our complete catalog and find the perfect game for you
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link className="btn btn-primary" to="/catalog/playstation">
                  Start Exploring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
