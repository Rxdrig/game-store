const crypto = require('crypto');

function generateGameKey(prefix = 'GAME') {
  const randomPart = crypto.randomBytes(6).toString('hex').toUpperCase();
  return `${prefix}-${randomPart.slice(0, 4)}-${randomPart.slice(4, 8)}-${randomPart.slice(8, 12)}`;
}

module.exports = {
  generateGameKey,
};
