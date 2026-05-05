import { games } from "../data/games"

export const filterGamesByPlatform = (platform) => {
  const validPlatforms = ["PlayStation", "Xbox", "Nintendo"]

  if (!validPlatforms.includes(platform)) {
    throw new Error(`Invalid platform: "${platform}"`)
  }

  return games.filter((game) => game.platform === platform)
}