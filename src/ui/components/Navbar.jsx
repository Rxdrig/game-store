import { NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./Navbar.css"

const navLinkClassName = ({ isActive }) =>
  isActive ? "cyber-nav-link cyber-nav-link-active" : "cyber-nav-link"

export const Navbar = () => {
  const { totalItems, toggleDrawer } = useCart()

  return (
    <header className="navbar-shell">
      <nav className="navbar navbar-expand-lg cyber-navbar glass-liquid-navbar">
        <div className="container navbar-inner">
          <NavLink className="navbar-brand cyber-brand" to="/home" aria-label="Go to home">
            <span className="brand-mark">◈</span>
            <span className="brand-text">Game Store</span>
          </NavLink>

          <button
            className="navbar-toggler cyber-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cyberNavbar"
            aria-controls="cyberNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </button>

          <div className="collapse navbar-collapse cyber-collapse" id="cyberNavbar">
            <ul className="navbar-nav cyber-nav mx-lg-auto">
              <li className="nav-item">
                <NavLink className={navLinkClassName} to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClassName} to="/catalog/playstation">
                  PlayStation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClassName} to="/catalog/nintendo">
                  Nintendo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLinkClassName} to="/catalog/xbox">
                  Xbox
                </NavLink>
              </li>
            </ul>

            <div className="cyber-actions">
              <button className="cyber-cart-btn" onClick={toggleDrawer}>
                Cart
                <span className="cyber-cart-badge">{totalItems}</span>
              </button>

              <NavLink className="cyber-action-link" to="/cart">
                Cart Page
              </NavLink>

              <NavLink className="cyber-action-link" to="/login">
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
