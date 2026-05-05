import { Link } from "react-router-dom"
import { useCart } from "../../ui/context/CartContext"
import "./CartPage.css"

export const CartPage = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  return (
    <section className="cart-page">
      <div className="container">
        <header className="cart-page-header">
          <h1>Your Shopping Cart</h1>
          <p>Manage your games, quantities and total before checkout.</p>
        </header>

        {cartItems.length === 0 ? (
          <div className="cart-page-empty">
            <h3>Your cart is empty</h3>
            <p>Add games from their detail page to start your order.</p>
            <Link to="/home" className="btn btn-primary">
              Explore Games
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="cart-page-list">
                {cartItems.map((item) => (
                  <article key={item.id} className="cart-page-item">
                    <img src={`/assets/juegos/${item.id}.jpg`} alt={item.name} />

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
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="cart-page-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <button className="btn btn-primary btn-lg w-100">Proceed to Checkout</button>
                <button className="btn btn-outline-danger w-100 mt-2" onClick={clearCart}>
                  Clear Cart
                </button>
              </aside>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
