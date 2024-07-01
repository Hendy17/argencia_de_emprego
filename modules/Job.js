const { DataTypes } = require('sequelize');
const db = require('../db/connection'); // Caminho correto para connection.js

const Job = db.define('Job', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  new_job: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Job;
