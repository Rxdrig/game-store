import { filterGamesByPlatform } from "../helpers/filterGamesByPlatform"
import { GamesCard } from "./GamesCard"

export const GameList = ({ platform }) => {
  const games = filterGamesByPlatform(platform)

  return (
    <>
      <h1>Game List</h1>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {games.map((game) => (
            <GamesCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </>
  )
}