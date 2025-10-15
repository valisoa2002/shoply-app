const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("EntityNER", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  type: {
    type: Sequelize.ENUM([
      "CATEGORIE",
      "BUDGET",
      "PRODUIT",
      "CARACTERISTIQUE",
      "ETAT",
      "COULEUR",
      "USAGE",
      "TAILLE",
      "VENDEUR",
      "MARQUE",
    ]),
    allowNull: false,
  },
  valeur: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  requete_id: {
    // Lien direct au produit plutôt qu'au vendeur
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "RequeteClient",
      key: "id",
    },
  },
  position_debut: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  position_debut: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
