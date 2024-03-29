import React from "react";
import classes from "./Details.module.css";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = (props) => {
  const country = {
    id: "COL",
    flags: {
      png: "https://flagcdn.com/w320/co.png",
      svg: "https://flagcdn.com/co.svg",
      alt: "The flag of Colombia is composed of three horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands.",
    },
    name: "Colombia",
    nativeName: "República de Colombia",
    population: 50882884,
    region: "Americas",
    continents: "Americas",
    capital: ["Bogotá"],
    domain: [".co"],
    currencies: {
      COP: {
        name: "Colombian peso",
        symbol: "$",
      },
      ARG: {
        name: "Peso argentino anashe",
        symbol: "$",
      },
    },
    languages: {
      spa: "Spanish",
    },
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
  };

  const currencyNames = Object.values(country.currencies).map(
    (currency) => currency.name
  );

  const languages = Object.values(country.languages).map(
    (language) => language
  );

  console.log(currencyNames);
  console.log(languages);

  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["top-container"]}>
          <button className={classes.back}>
            <FaArrowLeft className={classes.icon} />
            Back
          </button>
        </div>
        <div className={classes["img-container"]}>
          <img
            className={classes["img-inside"]}
            src={country.flags.png}
            alt="country flag"
          />
        </div>
        <div className={classes.content}>
          <h2>{country.name}</h2>
          <h5>
            Native Name: <span>{country.nativeName}</span>
          </h5>
          <h5>
            Population: <span>{country.population}</span>
          </h5>
          <h5>
            Region: <span>{country.continents}</span>
          </h5>
          <h5>
            Sub Region: <span>{country.region}</span>
          </h5>
          <h5>
            Capital: <span>{country.capital}</span>
          </h5>
          <h5>
            Top Level Domain: <span>{country.domain}</span>
          </h5>
          <h5>
            Currencies:
            <span> {currencyNames.map((curr) => curr + ", ")}</span>
          </h5>
          <h5>
            Languages: <span>{languages.map((language) => language)}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
