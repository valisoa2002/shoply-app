"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ner_entities", {
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ner_entities");
  },
};
