import React from "react";
import CardList from "./CardList";
import { usePokedexContext } from "../context/PokedexContext";

const MyCard = () => {
  const { myCards } = usePokedexContext();
  return (
    <>
      <CardList
        className={"mycard-cardlist"}
        cards={myCards}
        btnActive="remove"
      />
    </>
  );
};

export default MyCard;
