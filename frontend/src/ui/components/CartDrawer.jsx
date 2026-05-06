import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./CartDrawer.css"

export const CartDrawer = () => {
  const { pathname } = useLocation()
  const {
    cartItems,
    isDrawerOpen,
    closeDrawer,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart()

  useEffect(() => {
    closeDrawer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <div
        className={`cart-overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
      />

      <aside className={`cart-drawer ${isDrawerOpen ? "open" : ""}`} aria-label="Carrito de compras">
        <header className="cart-drawer-header">
          <h3>Carrito de Compras</h3>
          <button className="cart-close-btn" onClick={closeDrawer} aria-label="Cerrar carrito">
            ×
          </button>
        </header>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <p>El carrito está vacío.</p>
              <p>Agrega un juego desde la página para comenzar.</p>
            </div>
          ) : (
            cartItems.map((item) => {
              const imgSrc = new URL(`../../../assets/juegos/${item.id}.jpg`, import.meta.url).href
              return (
                <article key={item.id} className="cart-item">
                  <img
                    src={imgSrc}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-content">
                    <h4>{item.name}</h4>
                    <p>{item.platform}</p>

                    <div className="cart-item-actions">
                      <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name}`}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)} aria-label={`Increase ${item.name}`}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price-block">
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </article>
              )
            })
          )}
        </div>

        <footer className="cart-drawer-footer">
          <div className="cart-total-row">
            <span>{totalItems} item(s)</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <Link to="/cart" className="cart-go-page-btn" onClick={closeDrawer}>
            Ir al carrito
          </Link>
        </footer>
      </aside>
    </>
  )
}
