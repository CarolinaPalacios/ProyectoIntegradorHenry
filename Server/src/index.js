// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// const PORT = 3001;

// const server = http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const parts = req.url.split("/");
//       const id = parts[parts.length - 1];
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, "localhost");

// module.exports = {
//   server,
// };
const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
  });
});
