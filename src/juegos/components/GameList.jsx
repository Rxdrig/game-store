import { filterGamesByPlatform } from "../helpers/filterGamesByPlatform"
import { GameCard } from "./GameCard"

export const GameList = ({ platform }) => {
  const games = filterGamesByPlatform(platform)

  return (
    <>
      <h1>Game List</h1>
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </>
  )
}