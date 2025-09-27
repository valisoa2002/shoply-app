const User = require("../models/User");
module.exports = {
  getAllUsers: async (req, res) => {
    User.findAll()
      .then((users) => {
        const message = `Liste de tous les utilisateurs`;
        return res.status(200).json({ message: message, data: users });
      })
      .catch((err) => {
        const message = `Erreur de récupérer les utilisateurs: ${err.message}!!`;
        return res.status(200).json({ message: message });
      });
  },
};
