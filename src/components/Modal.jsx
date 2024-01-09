import React from "react";
import Header from "./Header";
import CardList from "./CardList";
import { usePokedexContext } from "../context/PokedexContext";
import { MODAL_INACTIVE } from "../constants/actions";

const Modal = () => {
  const { dispatch } = usePokedexContext();

  return (
    <div className="modal-contain">
      <div
        className="modal-overlay"
        onClick={() => dispatch({ type: MODAL_INACTIVE })}
      ></div>
      <div className="modal-inner">
        <Header search />
        <CardList className="modal-cardlist" />
      </div>
    </div>
  );
};

export default Modal;
