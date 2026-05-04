import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { JuegosRoutes } from "../juegos/routes/JuegosRoutes"


export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<JuegosRoutes />} />   
      </Routes>
    </>
  )
}