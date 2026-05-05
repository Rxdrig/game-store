import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { Navbar } from "../../ui/components/Navbar"
import { HomePage } from "../pages/HomePage"
import { CatalogPage } from "../pages/CatalogPage"
import { GameDetailPage } from "../pages/GameDetailPage"

export const GamesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="catalog/:platform" element={<CatalogPage />} />
        <Route path="playstation" element={<Navigate to="/catalog/playstation" replace />} />
        <Route path="nintendo" element={<Navigate to="/catalog/nintendo" replace />} />
        <Route path="xbox" element={<Navigate to="/catalog/xbox" replace />} />
        <Route path="juego/:id" element={<GameDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}