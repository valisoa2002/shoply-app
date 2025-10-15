const User = require("./User");
const Produit = require("./Produit");
const RequeteClient = require("./RequeteClient");
const EntiteNER = require("./NER_Entity");
const Marque = require("./Marque");
const Categorie = require("./Categorie");
const Vendeur = require("./Vendeur");

Produit.belongsTo(Marque, {
  foreignKey: "marque_id",
  as: "marque",
});

Produit.belongsTo(Vendeur, {
  foreignKey: "vendeur_id",
  as: "vendeur",
});

Produit.belongsTo(Categorie, {
  foreignKey: "categorie_id",
  as: "categorie",
});

RequeteClient.hasMany(EntiteNER, {
  foreignKey: "requete_id",
  as: "entites",
});

module.exports = {
  User,
  Produit,
  Categorie,
  Marque,
};
