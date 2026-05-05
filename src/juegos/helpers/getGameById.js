import { games } from "../data/games"

export const getGameById = (id) => {
  return games.find((game) => game.id === id)
}