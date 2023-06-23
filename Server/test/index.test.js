const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 920,
  name: "Caro",
  species: "Human",
  gender: "Female",
  status: "Alive",
  origin: {
    name: "Earth (C-137)",
  },
  image: "image.jpg",
};

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get("/rickandmorty/character/1456k");
      expect(response.statusCode).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    const access = { access: true };
    it("Responde con un objeto con la propiedad { access: true } si la información del usuario es correcta", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=caaro.palacios@hotmail.com&password=caro1234"
      );
      expect(response.body).toEqual(access);
    });
    it("Responde con un objeto con la propiedad { access: false } si la información del usuario es incorrecta", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=caaro.palacios@mail.com&password=27856sadh"
      );
      access.access = false;
      expect(response.body).toEqual(access);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });
    it("Debe agregar personajes a favoritos conservando los existentes", async () => {
      character.id = 1550;
      character.name = "Palacios";
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no pertenece a ningún personaje debería retornar un arreglo con todos los favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/48646");
      expect(response.body.length).toBe(2);
    });
    it("Si el ID solicitado pertenece a un personaje debería eliminarlo de favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/1550");
      expect(response.body.length).toBe(1);
    });
  });
});
