import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { carouselGames } from "../data/carouselData"
import "./HeroCarousel.css"

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const featuredGames = carouselGames

  useEffect(() => {
    if (!autoPlay || featuredGames.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length)
    }, 6000) // Cambiar cada 6 segundos

    return () => clearInterval(interval)
  }, [autoPlay, featuredGames.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length)
    setAutoPlay(false)
  }

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length)
    setAutoPlay(false)
  }

  const handleMouseEnter = () => setAutoPlay(false)
  const handleMouseLeave = () => setAutoPlay(true)

  if (featuredGames.length === 0) return null

  const game = featuredGames[currentSlide]
  const platformColors = {
    PlayStation: { color: "#2b7ef9", label: "🎮" },
    Xbox: { color: "#107c10", label: "⚡" },
    Nintendo: { color: "#e60012", label: "🎯" },
  }
  const platformData = platformColors[game.platform] || platformColors.PlayStation

  return (
    <div 
      className="hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="carousel-slides">
        {featuredGames.map((g, index) => {
          const imageSrc = new URL(`../../../assets/carrusel/${g.id}.jpg`, import.meta.url).href
          return (
          <div
            key={g.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">

              <h2 className="slide-title">{g.title}</h2>
              <p className="slide-genre">{g.genre}</p>

            </div>
          </div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <button 
        className="carousel-button carousel-prev"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="carousel-button carousel-next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
