import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      const filteredCharacters = payload
        ? state.allCharacters.filter(
            (character) => character.gender === payload
          )
        : state.allCharacters;
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      const orderedFavorites = [...state.myFavorites];
      orderedFavorites.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: orderedFavorites,
      };

    default:
      return { ...state };
  }
};

export default reducer;
