const fs = require('fs');
const path = require('path');
const games = require('../data/games.json');
const { addPurchase } = require('../data/memoryStore');
const { generateGameKey } = require('../utils/generateGameKey');

const purchasesFilePath = path.join(__dirname, '..', 'data', 'purchases.json');

function buy(req, res) {
  const { usuario, carrito } = req.body;

  if (!usuario || !Array.isArray(carrito) || carrito.length === 0) {
    return res.status(400).json({
      message: 'Debes enviar usuario y carrito con al menos un producto.',
    });
  }

  const normalizedItems = carrito.map((item) => ({
    gameId: item.gameId || item.id,
    quantity: Number(item.quantity || item.cantidad || 1),
  }));

  const hasInvalidItem = normalizedItems.some(
    (item) => !item.gameId || Number.isNaN(item.quantity) || item.quantity < 1,
  );

  if (hasInvalidItem) {
    return res.status(400).json({
      message: 'El carrito contiene productos inválidos.',
    });
  }

  const detailedItems = normalizedItems.map((item) => {
    const game = games.find((g) => g.id === item.gameId);
    if (!game) {
      return null;
    }

    const subtotal = Number((game.price * item.quantity).toFixed(2));

    return {
      gameId: game.id,
      name: game.name,
      unitPrice: game.price,
      quantity: item.quantity,
      subtotal,
      gameKey: generateGameKey(game.id.toUpperCase()),
    };
  });

  if (detailedItems.includes(null)) {
    return res.status(404).json({
      message: 'Uno o más juegos del carrito no existen.',
    });
  }

  const total = Number(
    detailedItems.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2),
  );

  const purchase = {
    id: `COMPRA-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    usuario,
    items: detailedItems,
    total,
    estado: 'pagado',
    createdAt: new Date().toISOString(),
  };

  addPurchase(purchase);

  return res.status(201).json({
    mensaje: 'Compra exitosa',
    juegos: detailedItems,
  });
}

module.exports = {
  buy,
  getPurchases,
};

function getPurchases(req, res) {
  const email = String(req.query.email || '').trim().toLowerCase();

  if (!email) {
    return res.status(400).json({ message: 'Query param email es requerido.' });
  }

  try {
    const raw = fs.readFileSync(purchasesFilePath, 'utf8');
    const all = JSON.parse(raw || '[]');

    const filtered = all.filter((p) => String(p.usuario || '').toLowerCase() === email);

    return res.status(200).json({ compras: filtered });
  } catch (error) {
    return res.status(500).json({ message: 'Error leyendo compras.' });
  }
}
