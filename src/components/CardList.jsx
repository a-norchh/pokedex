import React from "react";

const CardList = (props) => {
  return (
    <div className={`cardlist ${props.className}`}>
      <div className="cardlist-inner"></div>
    </div>
  );
};

export default CardList;
