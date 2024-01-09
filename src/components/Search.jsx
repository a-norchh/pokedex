import React from "react";
import iconSearch from "../asset/search.png";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Find pokemon" />
      <img src={iconSearch} alt="search" className="icon-search" />
    </div>
  );
};

export default Search;
