import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
        break;
      }
    }
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <button onClick={() => onClose(id)} className={style.botonCard}>
          X
        </button>
        <button className={style.containerFav} onClick={handleFavorite}>
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
      <img src={image} alt="" className={style.imagen} />
      <Link to={`/detail/${id}`} className={style.link}>
        <h2 className={style.nombre}>{name}</h2>
      </Link>
      <h2 className={style.especie}>{species}</h2>
      <h2 className={style.genero}>{gender}</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
