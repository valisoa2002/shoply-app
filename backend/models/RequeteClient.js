const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");
module.exports = sequelize.define("RequeteClient", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  texte: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
