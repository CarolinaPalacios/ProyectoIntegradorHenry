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

const express = require("express");
const server = express();
const { mainRoutes } = require("./routes/index");
const PORT = 3001;

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", mainRoutes);

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});
