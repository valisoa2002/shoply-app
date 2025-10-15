const Produit = require("../models/Produit");
const Categorie = require("../models/Categorie");
const Marque = require("../models/Marque");
const Vendeur = require("../models/Vendeur");

module.exports = {
  getAllProducts: async (req, res) => {
    Produit.findAll({
      attributes: ["id", "nom", "prix", "description", "etat"],
      include: [
        {
          model: Categorie,
          as: "categorie",
          attributes: ["nom"],
          required: true,
        },
        { model: Vendeur, as: "vendeur", attributes: ["nom"], required: true },
        { model: Marque, as: "marque", attributes: ["nom"], required: true },
      ],
    })
      .then((produits) => {
        const message = `Liste de tous les produits`;
        return res.status(200).json({ message: message, data: produits });
      })
      .catch((err) => {
        const message = `Erreur de récupérer les utilisateurs: ${err.message}!!`;
        return res.status(200).json({ message: message });
      });
  },
};
