import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import classes from "./Home.module.css";

/* const response = await fetch("https://restcountries.com/v3.1/name/belgium"); */

/* const response = await fetch("https://restcountries.com/v3.1/all"); */

/* Object.values(country.currencies).map(
  (currency) => currency.name
); */

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterRegion, setFilterRegion] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const filterChangeHandler = (continent) => {
    setFilterRegion(continent);
  };

  const searchChangeHandler = (input) => {
    setFilterSearch(input);
  };

  const fetchCountriesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      /// transform data
      const transformedCountries = data.map((countryData) => {
        return {
          id: countryData.cca3,
          flags: countryData.flags,
          name: countryData.name.common,
          nativeName: countryData.name.nativeName,
          population: countryData.population,
          region: countryData.region,
          continents: countryData.region,
          capital: countryData.capital,
          domain: countryData.tld,
          currencies: countryData.currencies,
          languages: countryData.languages,
          borders: countryData.borders,
        };
      });

      console.log(transformedCountries);
      setCountries(transformedCountries);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);

  /// filter data
  useEffect(() => {
    const filtered = countries.filter((country) => {
      return (
        (country.region === filterRegion || filterRegion === "") &&
        country.name.toLowerCase().startsWith(filterSearch.toLowerCase())
      );
    });
    setFilteredCountries(filtered);
  }, [filterRegion, filterSearch, countries]);

  return (
    <div className={classes.container}>
      {isLoading && (
        <div className={classes.loader}>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className={classes.loader}>
          <p>{error}</p>
        </div>
      )}
      {!error && !isLoading && (
        <Search
          onChangeFilter={filterChangeHandler}
          onChangeSearch={searchChangeHandler}
          selected={filterRegion}
        />
      )}
      {filteredCountries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
};

export default HomePage;
