import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { GameCard } from "../components/GameCard"
import { PurchaseConfirmationModal } from "../components/PurchaseConfirmationModal"
import { getGameById } from "../helpers/getGameById"
import { useCart } from "../../ui/context/CartContext"
import { useGames } from "../hooks/useGames"
import { createPurchase } from "../../api/purchaseApi"
import { getCurrentUser } from "../../auth/helpers/authStorage"
import "./GameDetailPage.css"

const platformColors = {
  PlayStation: { color: "#2b7ef9" },
  Xbox: { color: "#107c10" },
  Nintendo: { color: "#e60012"} ,
}

export const GameDetailPage = () => {
  const { id } = useParams()
  const { games, loading, error } = useGames()
  const game = getGameById(games, id)
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const { addToCart, openDrawer } = useCart()
  const [isBuyingNow, setIsBuyingNow] = useState(false)
  const [message, setMessage] = useState("")
  const [purchaseResult, setPurchaseResult] = useState(null)
  const [checkoutError, setCheckoutError] = useState("")
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  useEffect(() => {
    // Al montar la página de detalle, desplazar la ventana al tope (top) inmediatamente
    if (pageRef.current) {
      // Garantizar que el contenedor esté en la parte superior de la página
      window.scrollTo({ top: 0, behavior: "auto" })
    } else {
      // Fallback: asegurarse de que la ventana esté al inicio si no existe el ref
      window.scrollTo({ top: 0, behavior: "auto" })
    }
  }, [id])

  const handleReturn = () => {
    if (game.platform === "PlayStation") {
      navigate("/catalog/playstation")
    } else if (game.platform === "Nintendo") {
      navigate("/catalog/nintendo")
    } else {
      navigate("/catalog/xbox")
    }
  }

  const handleAddToCart = () => {
    if (!game) return
    addToCart(game)
    openDrawer()
  }

  const handleDirectPurchase = async () => {
    const user = getCurrentUser()

    if (!user?.email) {
      setCheckoutError("Debes iniciar sesión para completar la compra.")
      setMessage("")
      setPurchaseResult(null)
      return
    }

    try {
      setIsBuyingNow(true)
      setCheckoutError("")
      setMessage("")
      setPurchaseResult(null)
      setIsConfirmationOpen(false)

      const response = await createPurchase({
        usuario: user.email,
        carrito: [{ gameId: game.id, quantity: 1 }],
      })

      setMessage(response.mensaje || response.message || "Compra realizada con éxito")
      setPurchaseResult(response)
      setIsConfirmationOpen(true)
    } catch (purchaseError) {
      setCheckoutError(purchaseError.message || "No se pudo completar el pago")
    } finally {
      setIsBuyingNow(false)
    }
  }

  if (loading) {
    return (
      <div className="game-detail-page">
        <div className="container error-section">
          <p className="text-muted">Cargando detalle del juego...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="game-detail-page">
        <div className="container error-section">
          <h1>No se pudo cargar el juego</h1>
          <p className="text-muted">{error}</p>
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            Volver al Inicio
          </button>
        </div>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="game-detail-page">
        <div className="container error-section">
          <h1>Este juego no existe</h1>
          <p className="text-muted">Lo siento, no pudimos encontrar el juego que estás buscando.</p>
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            Volver al Inicio
          </button>
        </div>
      </div>
    )
  }

  const platformData = platformColors[game.platform] || platformColors.PlayStation

  return (
    <div className="game-detail-page" ref={pageRef}>
      {/* Header */}
      <div className="detail-header">
        <div className="container">
          <button 
            className="back-button" 
            onClick={handleReturn}
            aria-label="Go back"
          >
            ← Volver al Catálogo
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-content">
        <div className="container">
          <div className="row g-4">
            {/* Summary Card */}
            <div className="col-lg-4">
              <div className="detail-summary-card">
                <GameCard game={game} platformData={platformData} />
              </div>
            </div>

            {/* Info Section */}
            <div className="col-lg-8">
              <div className="info-container">
                <div className="purchase-panel">
                  <div>
                    <span className="purchase-label">Precio final</span>
                    <h2 className="purchase-price">${game.price.toFixed(2)}</h2>
                  </div>

                  <div className="purchase-actions">
                    <button className="btn btn-outline-primary btn-lg" onClick={handleAddToCart}>
                      Agregar al carrito
                    </button>
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={handleDirectPurchase}
                      disabled={isBuyingNow}
                    >
                      {isBuyingNow ? "Procesando..." : "Pagar ahora"}
                    </button>
                  </div>
                </div>

                {checkoutError && (
                  <div className="detail-checkout-feedback">
                    <p className="text-danger mb-2">{checkoutError}</p>
                  </div>
                )}

                {/* Description */}
                <div className="description-section">
                  <h3>Acerca de este juego</h3>
                  <p className="game-description">{game.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button 
                    className="btn btn-outline-primary btn-lg"
                    onClick={handleReturn}
                  >
                    Volver al Catálogo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PurchaseConfirmationModal
        isOpen={isConfirmationOpen && purchaseResult?.juegos?.length > 0}
        title={message || "Compra realizada con éxito"}
        subtitle="Aquí tienes las claves falsas de tu juego comprado."
        items={purchaseResult?.juegos || []}
        onClose={() => {
          setIsConfirmationOpen(false)
          setPurchaseResult(null)
          setMessage("")
        }}
      />
    </div>
  )
}