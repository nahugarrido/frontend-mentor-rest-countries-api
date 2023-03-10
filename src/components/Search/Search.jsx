import React from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes["input-box"]}>
        <FaSearch className={classes.icon} />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <select className={classes["select-box"]} id="select-region">
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
