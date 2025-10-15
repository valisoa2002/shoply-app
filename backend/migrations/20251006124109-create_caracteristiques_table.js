"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("caracteristiques", {
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
      },
      valeur: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("caracteristiques");
  },
};
