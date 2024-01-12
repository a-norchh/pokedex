import React from "react";
import CardItem from "./CardItem";

const CardList = (props) => {
  return (
    <div className={`cardlist ${props.className}`}>
      <div className="cardlist-inner">
        <ul>
          {props.cards.length === 0 ? (
            <p className="notice-text">- Don't have any card -</p>
          ) : (
            <>
              {props.cards.map((card) => (
                <li key={card.id}>
                  <CardItem cardDetails={card} btnActive={props.btnActive} />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
