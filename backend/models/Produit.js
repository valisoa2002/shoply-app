const { Sequelize } = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Produit", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  prix: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  etat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  vendeur_id: {
    // Lien direct au produit plutôt qu'au vendeur
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Vendeur",
      key: "id",
    },
  },
  marque_id: {
    // Lien direct au produit plutôt qu'à la marqur
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Marque",
      key: "id",
    },
  },
  categorie_id: {
    // Lien direct au produit plutôt qu'à la catgorie
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Categorie",
      key: "id",
    },
  },
  image_url: {
    type: Sequelize.STRING, // Image qui représente le produit
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
