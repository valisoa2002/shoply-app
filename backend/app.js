const express = require("express");
const sequelize = require("./database/connection");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 5000;

require("dotenv").config();
require("./models/index");

// POUR LES ROUTES
const productRoutes = require("./routes/products.route");

app.use(
  cors({
    origin: "http://localhost:8081",
    credentials: true,
  })
);

app.use(morgan("combined"));

app.listen(port, () => console.log(`Serveur lancé dans le port: ${port}!`));

// =========================================
// TESTER LA CONNEXION A LA BASE DE DONNEES
// =========================================

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connexion établie!!`);
  })
  .catch((err) => {
    console.log(`Erreur de connexion: ${err.message}`);
  });

// ==========
// ENDPOINTS
// ==========
app.use("/api/products/", productRoutes);
