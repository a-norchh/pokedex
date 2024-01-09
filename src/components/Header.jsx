import React from "react";
import Search from "./Search";

const Header = (props) => {
  return (
    <div className="header">
      {props.title && <h1 className="title atma">{props.title}</h1>}
      {props.search && (
        // <Search/>
        <Search />
      )}
    </div>
  );
};

export default Header;
