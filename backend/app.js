const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serveur lancé dans le port: ${port}!`));
