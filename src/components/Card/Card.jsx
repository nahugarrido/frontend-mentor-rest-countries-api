import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img
          className={classes["img-inside"]}
          src={props.country.flags.png}
          alt=""
        />
      </div>
      <h3>{props.country.name}</h3>
      <div className={classes.content}>
        <p>
          <b>Population:</b> {props.country.population}
        </p>
        <p>
          <b>Region:</b> {props.country.continents}
        </p>
        <p>
          <b>Capital:</b> {props.country.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
