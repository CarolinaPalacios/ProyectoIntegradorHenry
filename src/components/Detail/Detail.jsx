import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.name}>{character?.name}</h1>
        <br />
        <div className={style.text}>
          <h2 className={style.status}>STATUS | {character?.status}</h2>
          <h2 className={style.gender}>GENDER | {character?.gender}</h2>
          <h2 className={style.specie}>SPECIE | {character?.species}</h2>
          <h2 className={style.origin}>ORIGIN | {character?.origin?.name}</h2>
        </div>
      </div>
      <br />
      <div className={style.imageContainer}>
        <br />
        <img
          src={character?.image}
          alt={character?.name}
          className={style.image}
        />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Detail;
