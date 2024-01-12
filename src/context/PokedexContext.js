import React, { useContext, createContext, useReducer, useEffect } from "react";
import PokedexReducer from "../reducer/PokedexReducer";
import { startFetching } from "../api/api";

const initialState = {
  modalActive: false,
  cards: [],
  myCards: [],
};

const PokedexContext = createContext({});

export const PokedexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PokedexReducer, initialState);

  useEffect(() => {
    startFetching(dispatch);
  }, []);

  return (
    <PokedexContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedexContext = () => {
  return useContext(PokedexContext);
};
