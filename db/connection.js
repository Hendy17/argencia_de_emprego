const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'app.db'), // Certifique-se de que o caminho está correto
});

module.exports = sequelize;
