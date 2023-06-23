import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorite from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const URL = "http://localhost:3001/rickandmorty/login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      if (characters.some((character) => character.id === Number(id))) {
        throw new Error("¡Este personaje ya ha sido agregado!");
      }
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      // if (!data.name) {
      //   throw new Error("¡No hay personajes con este ID!");
      // }
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      if (error.message === "¡Este personaje ya ha sido agregado!")
        alert(error.message);
      else alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const filtered = characters.filter((characters) => characters.id !== id);
    setCharacters(filtered);
  };

  let haveIt = [];
  const onRandom = (id) => {
    //Generate random number
    let random = (Math.random() * 826).toFixed();
    if (characters.some((character) => character.id === Number(id))) {
      window.alert("¡Este personaje ya ha sido agregado!");
      return;
    }

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`http://localhost:3001/rickandmorty/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} random={onRandom} logout={logout} />
      ) : null}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
