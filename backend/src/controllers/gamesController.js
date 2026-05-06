const games = require('../data/games.json');

function getGames(req, res) {
  res.status(200).json(games);
}

module.exports = {
  getGames,
};
