import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      {props.title && <h1 className="title atma">{props.title}</h1>}
    </div>
  );
};

export default Header;
