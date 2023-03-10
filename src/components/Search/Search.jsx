import React from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";

const Search = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const inputHandler = (event) => {
    props.onChangeSearch(event.target.value);
  };

  return (
    <div className={classes.search}>
      <div className={classes["input-box"]}>
        <FaSearch className={classes.icon} />
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <select
        value={props.selected}
        onChange={dropdownHandler}
        className={classes["select-box"]}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
