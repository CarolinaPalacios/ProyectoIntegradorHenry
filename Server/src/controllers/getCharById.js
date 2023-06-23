// const axios = require("axios");

// const getCharById = async (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({ name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin: origin.name,
//         image,
//         status,
//       };

//       return res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-Type": "text/plain" })
//         .end(error.message);
//     });
// };

// module.exports = { getCharById };

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw Error(`ID: ${id} Not found`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      status: data.status,
      image: data.image,
      gender: data.gender,
    };

    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }
};

module.exports = { getCharById };
