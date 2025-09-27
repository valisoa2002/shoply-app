const User = require("./User");
const Commande = require("./Commande");
const DetailCommande = require("./DetailCommande");
const Product = require("./Product");

User.hasMany(Commande, {
  foreignKey: "Z",
  as: "commandes",
  onDelete: "CASCADE",
});

Commande.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

DetailCommande.hasMany(Commande, {
  foreignKey: "commandeId",
  as: "commandes",
  onDelete: "CASCADE",
});

Commande.belongsTo(DetailCommande, {
  foreignKey: "commandeId",
  as: "detail",
});

DetailCommande.hasMany(Product, {
  foreignKey: "productId",
  as: "products",
  onDelete: "CASCADE",
});

Product.belongsTo(DetailCommande, {
  foreignKey: "productId",
  as: "detail",
});

module.exports = {
  User,
  Commande,
  Product,
  DetailCommande,
};
