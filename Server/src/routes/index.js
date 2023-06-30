const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

const mainRoutes = require("express").Router();

mainRoutes.get("/login", login);

mainRoutes.post("/login", postUser);

mainRoutes.post("/fav", postFav);

mainRoutes.delete("/fav/:id", deleteFav);

mainRoutes.get("/character/:id", getCharById);

module.exports = { mainRoutes };
