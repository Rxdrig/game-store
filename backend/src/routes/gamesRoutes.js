const express = require('express');
const { getGames } = require('../controllers/gamesController');

const router = express.Router();

router.get('/juegos', getGames);

module.exports = router;
