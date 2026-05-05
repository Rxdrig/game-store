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

      <aside className={`cart-drawer ${isDrawerOpen ? "open" : ""}`} aria-label="Shopping cart">
        <header className="cart-drawer-header">
          <h3>Shopping Cart</h3>
          <button className="cart-close-btn" onClick={closeDrawer} aria-label="Close cart">
            ×
          </button>
        </header>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <p>Your cart is empty.</p>
              <p>Add a game from the detail page to get started.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <img
                  src={`/assets/juegos/${item.id}.jpg`}
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
                    Remove
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <footer className="cart-drawer-footer">
          <div className="cart-total-row">
            <span>{totalItems} item(s)</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <Link to="/cart" className="cart-go-page-btn" onClick={closeDrawer}>
            Go To Cart Page
          </Link>
        </footer>
      </aside>
    </>
  )
}
