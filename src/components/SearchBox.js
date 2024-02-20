import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 grow">
      <input
        onChange={searchChange}
        className="pa3 bg-lightest-blue bw2 b--green br3"
        type="search"
        placeholder="search robot"
      ></input>
    </div>
  );
};

export default SearchBox;
