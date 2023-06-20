const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");

const mainRoutes = require("express").Router();

mainRoutes.get("/character/:id", getCharById);

mainRoutes.get("/login", login);

mainRoutes.post("/fav", postFav);

mainRoutes.delete("/fav/:id", deleteFav);

module.exports = { mainRoutes };
