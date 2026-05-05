import { juegos } from "../data/juegos";


export const GetJuegoById = (id) => {
    return juegos.find((juego) => juego.id === id);
}
