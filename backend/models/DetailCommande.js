const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("DetailCommand", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  commandeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: "Command",
      key: "id",
    },
  },
  productId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: "Product",
      key: "id",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  pu: {
    type: Sequelize.INTEGER, // Prix Unitaire pour chaque produit au moment de la commande
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
