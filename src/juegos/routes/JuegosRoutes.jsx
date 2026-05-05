import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/components/Footer"
import { Navbar } from "../../ui/components/Navbar"
import { HomePage } from "../pages/HomePage"
import { PlaystationPage } from "../pages/PlaystationPage"
import { NintendoPage } from "../pages/NintendoPage"
import { XboxPage } from "../pages/XboxPage"
import { JuegoPage } from "../pages/JuegoPage"


export const JuegosRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="playstation" element={<PlaystationPage />}></Route>
            <Route path="nintendo" element={<NintendoPage />}></Route>
            <Route path="xbox" element={<XboxPage />}></Route>
            <Route path="juego/:id" element={<JuegoPage />}></Route>
        </Routes>
        <Footer/>
    </>
  )
}
