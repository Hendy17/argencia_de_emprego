const { Sequelize } = require('sequelize');
const path = require('path');
const { connect } = require('http2');

// Caminho para o banco de dados SQLite (db/app.db)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db', 'app.db'),
});

module.exports = sequelize;
