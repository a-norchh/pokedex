import React, { useContext, createContext, useReducer } from "react";
import PokedexReducer from "../reducer/PokedexReducer";

const initialState = {
  modalActive: false,
  cards: [],
  myCards: [],
};

const PokedexContext = createContext({});

export const PokedexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokedexReducer, initialState);

  return (
    <PokedexContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = () => {
  return useContext(PokedexContext);
};
