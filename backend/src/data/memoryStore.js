const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');
const purchasesFilePath = path.join(__dirname, 'purchases.json');

function readJsonArray(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeJsonArray(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const users = readJsonArray(usersFilePath);
const purchases = readJsonArray(purchasesFilePath);

function addUser(user) {
  users.push(user);
  writeJsonArray(usersFilePath, users);
  return user;
}

function addPurchase(purchase) {
  purchases.push(purchase);
  writeJsonArray(purchasesFilePath, purchases);
  return purchase;
}

module.exports = {
  users,
  purchases,
  addUser,
  addPurchase,
};
