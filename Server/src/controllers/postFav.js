const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  // Se extraen las props, incluyendo el userId.
  const { id, name, origin, status, image, species, gender, userId } = req.body;

  try {
    // Se verifica si se proporcionó el id, ya que es un dato necesario para crear el favorito.
    if (!id) return res.status(401).send("Faltan datos");

    const character = {
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    };

    const char = await Favorite.create(character);
    // Si se proporciona un userId, se busca al usuario correspondiente en la base de datos.
    // Después, se utiliza el método `addFavorite` para asociar el favorito al usuario.
    // Este metodo se genera gracias a la relacion de los dos modelos (addFavorite, removeFavorite, getFavorites)
    if (userId) {
      const user = await User.findByPk(userId);
      if (user) await user.addFavorite(char);
    }
    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postFav;
