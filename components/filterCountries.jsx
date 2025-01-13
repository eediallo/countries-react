// import { countries } from "../src/countries";
import { useEffect, useState } from "react";
import { WorldCountries } from "./worldCountries";
import PropTypes from "prop-types";

export const FilterCountries = ({ countries }) => {
  // input search filter
  let [searchTerm, setSeacthTerm] = useState("");
  let [filteredCountries, setFilteredCountries] = useState(
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  );

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const handleOnInput = (e) => {
    const searchTerm = e.target.value.toLocaleLowerCase();
    setSeacthTerm(searchTerm);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name.common} ${country.capital}`.toLocaleLowerCase();
      return countryText.includes(searchTerm);
    });
    setFilteredCountries(filtered);
  };

  //drop down filter
  let [filterBy, setFilterBy] = useState("Filter by Region");

  function handleOnClcik(e) {
    const filterByValue = e.target.value;
    setFilterBy(filterByValue);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name} ${country.capital} ${country.region}`.toLocaleLowerCase();
      if (filterByValue === "Filter by Region") {
        return countries;
      }
      return (
        countryText.includes(searchTerm) &&
        country.region.toLowerCase().includes(filterByValue.toLowerCase())
      );
    });
    setFilteredCountries(filtered);
  }

  return (
    <>
      <div className="search-region-filter-container">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search for a country"
          name="search-for-country"
          id="search-for-country"
          onInput={handleOnInput}
        />
        <div>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            onClick={handleOnClcik}
            name="region-filter"
            id="region-filter"
          >
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries">
        <WorldCountries countries={filteredCountries} />
      </div>
    </>
  );
};

FilterCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
