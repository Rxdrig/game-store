import { Navigate, Routes, Route } from "react-router-dom"
import { HomePage } from "../juegos/pages/HomePage"
import { PlaystationPage } from "../juegos/pages/PlaystationPage"
import { NintendoPage } from "../juegos/pages/NintendoPage"
import { XboxPage } from "../juegos/pages/XboxPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../ui/components/Navbar"
import { Footer } from "../ui/components/Footer"


export const AppRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Navigate to="/home"/>}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="playstation" element={<PlaystationPage />}></Route>
          <Route path="nintendo" element={<NintendoPage />}></Route>
          <Route path="xbox" element={<XboxPage />}></Route>
      </Routes>
    <Footer/>
    </>
  )
}