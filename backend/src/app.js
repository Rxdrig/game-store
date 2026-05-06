const express = require('express');
const cors = require('cors');

const gamesRoutes = require('./routes/gamesRoutes');
const authRoutes = require('./routes/authRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API e-commerce funcionando.',
  });
});

app.use(gamesRoutes);
app.use(authRoutes);
app.use(purchaseRoutes);

module.exports = app;
