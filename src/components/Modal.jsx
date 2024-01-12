import React, { useState } from "react";
import iconSearch from "../asset/search.png";
import CardList from "./CardList";
import { usePokedexContext } from "../context/PokedexContext";
import { MODAL_INACTIVE } from "../constants/actions";

const Modal = () => {
  const { dispatch, cards } = usePokedexContext();
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const cardsFiltered = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchText.toLowerCase()) ||
      card.type.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="modal-contain">
      <div
        className="modal-overlay"
        onClick={() => dispatch({ type: MODAL_INACTIVE })}
      ></div>

      <div className="modal-inner">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Find pokemon"
            onChange={(e) => onChangeHandler(e)}
            value={searchText}
          />
          <img src={iconSearch} alt="search" className="icon-search" />
        </div>

        <CardList
          className={"modal-cardlist"}
          cards={cardsFiltered}
          btnActive="add"
        />
      </div>
    </div>
  );
};

export default Modal;
