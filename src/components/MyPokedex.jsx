import React from "react";
import Header from "./Header";
import MyCardContain from "./MyCardContain";
import ButtomBar from "./ButtomBar";
import Modal from "./Modal";
import { usePokedexContext } from "../context/PokedexContext";

const MyPokedex = () => {
  const { modalActive } = usePokedexContext();

  return (
    <div className="my-pokedex">
      <Header title="My Pokedex" />
      <MyCardContain />
      <ButtomBar />
      {modalActive && <Modal />}
    </div>
  );
};

export default MyPokedex;
