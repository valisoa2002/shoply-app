"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Catégories
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        nom: "Chaussures",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nom: "Ordinateurs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nom: "Téléphones",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // 2. Marques
    await queryInterface.bulkInsert("marques", [
      { id: 1, nom: "Nike", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nom: "Adidas", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nom: "Samsung", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, nom: "Apple", createdAt: new Date(), updatedAt: new Date() },
    ]);
    // 3. Vendeurs
    await queryInterface.bulkInsert("vendeurs", [
      {
        id: 1,
        nom: "Boutique Centrale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nom: "MarketPlace UAceem",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // 4. Produits
    await queryInterface.bulkInsert("produits", [
      {
        id: 1,
        nom: "Nike Air Max",
        prix: 120,
        categorie_id: 1,
        marque_id: 1,
        vendeur_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nom: "Adidas Superstar",
        prix: 95,
        categorie_id: 1,
        marque_id: 2,
        vendeur_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nom: "Samsung Galaxy S23",
        prix: 900,
        categorie_id: 3,
        marque_id: 3,
        vendeur_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        nom: "Apple MacBook Pro 14",
        prix: 2200,
        categorie_id: 2,
        marque_id: 4,
        vendeur_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // 5. Caractéristiques
    await queryInterface.bulkInsert("caracteristiques", [
      // Chaussures
      {
        id: 1,
        produit_id: 1,
        type: "COULEUR",
        valeur: "Rouge",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        produit_id: 1,
        type: "TAILLE",
        valeur: "42",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        produit_id: 2,
        type: "COULEUR",
        valeur: "Blanc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        produit_id: 2,
        type: "TAILLE",
        valeur: "40",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Téléphone
      {
        id: 5,
        produit_id: 3,
        type: "COULEUR",
        valeur: "Noir",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        produit_id: 3,
        type: "ETAT",
        valeur: "Neuf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // MacBook
      {
        id: 7,
        produit_id: 4,
        type: "USAGE",
        valeur: "Travail",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        produit_id: 4,
        type: "CARACTERISTIQUE",
        valeur: "M1 Pro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // 6. Exemple de requête client
    await queryInterface.bulkInsert("requete_clients", [
      {
        id: 1,
        texte: "Je cherche des chaussures Nike rouges taille 42 pas chères",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        texte: "Un MacBook Apple puissant pour le travail",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // 7. Entités extraites (NER)
    // await queryInterface.bulkInsert("ner_entities", [
    //   // Requête 1
    //   {
    //     id: 1,
    //     requete_id: 1,
    //     type: "CATEGORIE",
    //     valeur: "chaussures",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 2,
    //     requete_id: 1,
    //     type: "MARQUE",
    //     valeur: "Nike",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 3,
    //     requete_id: 1,
    //     type: "COULEUR",
    //     valeur: "rouges",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 4,
    //     requete_id: 1,
    //     type: "TAILLE",
    //     valeur: "42",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 5,
    //     requete_id: 1,
    //     type: "BUDGET",
    //     valeur: "pas cher",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   // Requête 2
    //   {
    //     id: 6,
    //     requete_id: 2,
    //     type: "CATEGORIE",
    //     valeur: "ordinateur",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 7,
    //     requete_id: 2,
    //     type: "MARQUE",
    //     valeur: "Apple",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 8,
    //     requete_id: 2,
    //     type: "USAGE",
    //     valeur: "travail",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 9,
    //     requete_id: 2,
    //     type: "CARACTERISTIQUE",
    //     valeur: "puissant",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("entite_ners", null, {});
    await queryInterface.bulkDelete("requete_clients", null, {});
    await queryInterface.bulkDelete("caracteristiques", null, {});
    await queryInterface.bulkDelete("produits", null, {});
    await queryInterface.bulkDelete("vendeurs", null, {});
    await queryInterface.bulkDelete("marques", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
