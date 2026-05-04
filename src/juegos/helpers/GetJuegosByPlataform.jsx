import { juegos } from "../data/juegos";

export const getJuegosByPlataform = (plataforma) => {
    const aux = ['Playstation', 'Xbox', 'Nintendo'];
    if (!aux.includes(plataforma)) {
        throw new Error(`Plataforma no válida: "${plataforma}"`);
    }
    return juegos.filter(juego => juego.plataforma === plataforma);
}