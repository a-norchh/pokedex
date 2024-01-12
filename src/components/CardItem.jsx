import React from "react";
import Bar from "./Bar";
import Happiness from "./Happiness";
import { usePokedexContext } from "../context/PokedexContext";
import { ADD_POKEMON, REMOVE_POKEMON } from "../constants/actions";

const CardItem = ({ cardDetails, btnActive }) => {
  const { id, name, imageUrl, hp, attacks, weaknesses } = cardDetails;
  const { dispatch } = usePokedexContext();

  let pokeHp = hp;
  if (pokeHp > 100) {
    pokeHp = 100;
  }

  let pokeStr = attacks?.length * 50;
  if (pokeStr === 50) {
    pokeStr = 50;
  } else if (pokeStr === 100) {
    pokeStr = 100;
  } else {
    pokeStr = 0;
  }

  let pokeWeak = weaknesses?.length * 100;
  if (pokeWeak === 100) {
    pokeWeak = 100;
  } else {
    pokeWeak = 0;
  }

  let pokeDmg = 0;
  attacks?.forEach((attack) => {
    pokeDmg += parseInt(attack.damage.replace(/\D/g, ""));
  });

  // ((HP / 10) + (Damage /10 ) + 10 - (Weakness)) / 5
  // ((100 / 10) + (60 /10 ) + 10 - (50%)) / 5
  // ((10 + 6 + 10 - (50%)) / 5
  let pokeHappiness = (pokeHp / 10 + (pokeDmg / 10 + 10) - pokeWeak) / 5;

  // console.log(
  //   "HP " + pokeHp,
  //   "STR " + pokeStr,
  //   "WEAK " + pokeWeak,
  //   "DMG " + pokeDmg,
  //   "HAPPY " + pokeHappiness
  // );

  const addPokemonHadnler = () => {
    dispatch({ type: ADD_POKEMON, payload: cardDetails });
  };

  const removePokemonHadnler = () => {
    dispatch({ type: REMOVE_POKEMON, payload: id });
  };

  let btnContent = <button onClick={addPokemonHadnler}>Add</button>;
  if (btnActive === "remove") {
    btnContent = <button onClick={removePokemonHadnler}>X</button>;
  }

  return (
    <div className="card-item">
      <div className="card-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-deatils">
        <div className="card-title">
          <p>{name}</p>
          {btnContent}
        </div>
        <div className="card-level">
          <Bar title="HP" barActive={pokeHp} />
          <Bar title="STR" barActive={pokeStr} />
          <Bar title="WEAK" barActive={pokeWeak} />
        </div>
        <div className="card-happiness">
          <Happiness />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
