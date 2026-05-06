import { Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../../ui/context/CartContext"
import { createPurchase } from "../../api/purchaseApi"
import { getCurrentUser } from "../../auth/helpers/authStorage"
import { PurchaseConfirmationModal } from "../components/PurchaseConfirmationModal"
import "./CartPage.css"

export const CartPage = () => {
  const [isPaying, setIsPaying] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [purchaseResult, setPurchaseResult] = useState(null)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const handleCheckout = async () => {
    const user = getCurrentUser()

    if (!user?.email) {
      setError("Debes iniciar sesión para completar la compra.")
      setMessage("")
      return
    }

    try {
      setIsPaying(true)
      setError("")
      setMessage("")
      setPurchaseResult(null)
      setIsConfirmationOpen(false)

      const carrito = cartItems.map((item) => ({
        gameId: item.id,
        quantity: item.quantity,
      }))

      const response = await createPurchase({
        usuario: user.email,
        carrito,
      })

      setMessage(response.mensaje || response.message || "Compra realizada con éxito")
      setPurchaseResult(response)
      setIsConfirmationOpen(true)
      clearCart()
    } catch (err) {
      setError(err.message || "No se pudo completar el pago")
    } finally {
      setIsPaying(false)
    }
  }

  return (
    <section className="cart-page">
      <div className="container">
        <header className="cart-page-header">
          <h1>Tu Carrito de Compras</h1>
          <p>Administra tus juegos, cantidades y total antes de finalizar la compra.</p>
        </header>

        {cartItems.length === 0 ? (
          <div className="cart-page-empty">
            <h3>Tu carrito está vacío</h3>
            <p>Agrega juegos desde su página de detalle para comenzar tu pedido.</p>
            <Link to="/home" className="btn btn-primary">
              Explorar Juegos
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="cart-page-list">
                {cartItems.map((item) => {
                  const imgSrc = new URL(`../../../assets/juegos/${item.id}.jpg`, import.meta.url).href
                  return (
                  <article key={item.id} className="cart-page-item">
                    <img src={imgSrc} alt={item.name} />

                    <div className="cart-page-item-content">
                      <h4>{item.name}</h4>
                      <p>{item.platform} · {item.genre}</p>

                      <div className="cart-page-qty-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                    </div>

                    <div className="cart-page-item-side">
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </article>
                  )
                })}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="cart-page-summary">
                <h3>Order Summary</h3>
                {error && <p className="text-danger">{error}</p>}
                {message && <p className="text-success">{message}</p>}
                <div className="summary-row">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button
                  className="btn btn-primary btn-lg w-100"
                  onClick={handleCheckout}
                  disabled={isPaying}
                >
                  {isPaying ? "Procesando pago..." : "Proceed to Checkout"}
                </button>
                <button className="btn btn-outline-danger w-100 mt-2" onClick={clearCart}>
                  Clear Cart
                </button>

              </aside>
            </div>
          </div>
        )}

        <PurchaseConfirmationModal
          isOpen={isConfirmationOpen && purchaseResult?.juegos?.length > 0}
          title={message || "Compra realizada con éxito"}
          subtitle="Aquí tienes las claves falsas de tus juegos comprados."
          items={purchaseResult?.juegos || []}
          onClose={() => {
            setIsConfirmationOpen(false)
            setPurchaseResult(null)
            setMessage("")
          }}
        />
      </div>
    </section>
  )
}
