const express = require('express');
const { buy, getPurchases } = require('../controllers/purchaseController');

const router = express.Router();

router.post('/comprar', buy);
router.get('/compras', getPurchases);

module.exports = router;
