import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFav, filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Favorite.module.css";

const Favorites = ({ myFavorites, removeFav }) => {
  const handleClose = (id) => {
    removeFav(id);
  };
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.container}>
        <select onChange={handleOrder} className={style.order} value="">
          <option disabled value="">
            Order
          </option>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
        </select>
        <select onChange={handleFilter} className={style.filter} value="">
          <option disabled value="">
            Filter
          </option>
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.cardContainer}>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              status={fav.status}
              species={fav.species}
              gender={fav.gender}
              origin={fav.origin}
              image={fav.image}
              onClose={handleClose}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
