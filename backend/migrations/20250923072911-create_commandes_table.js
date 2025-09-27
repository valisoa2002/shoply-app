"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("commandes", {
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
        type: Sequelize.STRING(100), // Adresse de livraison pour cette commande
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("commandes");
  },
};
