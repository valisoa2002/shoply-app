const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Command", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  date_commande: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0,
    allowNull: false,
  },
  montant_total: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  delivery_address: {
    type: Sequelize.STRING, // Adresse de livraison pour cette commande
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: "User",
      key: "id",
    },
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
