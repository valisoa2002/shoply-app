const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER, // Quantité sisponible en stock
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING, // Image qui représente le produit
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
