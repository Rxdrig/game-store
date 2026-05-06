export const getGameById = (games, id) => {
  return games.find((game) => game.id === id)
}