const express = require("express");
const sequelize = require("./database/connection");
const app = express();
const userRoutes = require("./routes/users.route");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serveur lancé dans le port: ${port}!`));

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connexion établie!!`);
  })
  .catch((err) => {
    console.log(`Erreur de connexion: ${err.message}`);
  });

// ENDPOINTS
app.use("/api/users/", userRoutes);
