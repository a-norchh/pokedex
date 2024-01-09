import React from "react";
import { usePokedexContext } from "../context/PokedexContext";
import { MODAL_ACTIVE } from "../constants/actions";

const ButtomBar = () => {
  const { dispatch } = usePokedexContext();

  return (
    <div
      className="buttom-bar"
      onClick={() => dispatch({ type: MODAL_ACTIVE })}
    >
      <div className="btn">
        <p className="atma">+</p>
      </div>
    </div>
  );
};

export default ButtomBar;
