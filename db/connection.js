const { Sequelize } = require('sequelize');
const path = require('path');

// Caminho para o banco de dados SQLite (db/app.db)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'app.db'), // Verifique se o caminho está correto
});

module.exports = sequelize;
