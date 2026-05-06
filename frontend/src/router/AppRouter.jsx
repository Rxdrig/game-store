import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { GamesRoutes } from "../juegos/routes/GamesRoutes"


export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<GamesRoutes />} />   
      </Routes>
    </>
  )
}