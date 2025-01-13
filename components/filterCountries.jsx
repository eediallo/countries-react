// import { countries } from "../src/countries";
import { useState } from "react";
import { WorldCountries } from "./worldCountries";
import PropTypes from "prop-types";
import { RegionFiter } from "./filterByRegion";

export const FilterCountries = ({ countries }) => {
  let [searchTerm, setSeacthTerm] = useState("");
  let [filteredCountries, setFilteredCountries] = useState(countries);

  const handleOnInput = (e) => {
    const searchTerm = e.target.value.toLocaleLowerCase();
    setSeacthTerm(searchTerm);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name} ${country.capital}`.toLocaleLowerCase();
      return countryText.includes(searchTerm);
    });
    setFilteredCountries(filtered);
  };

  return (
    <>
      <div className="search-region-filter-container">
        <input
          value={searchTerm}
          type="text"
          placeholder="Search for a country"
          name="search-for-country"
          id="search-for-country"
          onChange={handleOnInput}
        />
        <RegionFiter />
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
