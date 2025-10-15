const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");
module.exports = sequelize.define("Marque", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  type: {
    type: Sequelize.ENUM(["COULEUR", "TAILLE", "USAGE", "CARACTERISTIQUE"]),
    allowNull: false,
  },
  produit_id: {
    // Lien direct au produit plutôt qu'au vendeur
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Produit",
      key: "id",
    },
  },
  valeur: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
