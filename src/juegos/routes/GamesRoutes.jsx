import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { Navbar } from "../../ui/components/Navbar"
import { CartDrawer } from "../../ui/components/CartDrawer"
import { CartProvider } from "../../ui/context/CartContext"
import { HomePage } from "../pages/HomePage"
import { CatalogPage } from "../pages/CatalogPage"
import { GameDetailPage } from "../pages/GameDetailPage"
import { CartPage } from "../pages/CartPage"

export const GamesRoutes = () => {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="catalog/:platform" element={<CatalogPage />} />
        <Route path="playstation" element={<Navigate to="/catalog/playstation" replace />} />
        <Route path="nintendo" element={<Navigate to="/catalog/nintendo" replace />} />
        <Route path="xbox" element={<Navigate to="/catalog/xbox" replace />} />
        <Route path="juego/:id" element={<GameDetailPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}