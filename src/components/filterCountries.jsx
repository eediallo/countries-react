import { useEffect, useState } from "react";
import { Countries } from "./Countries";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar/SearchBar";

export const FilterCountries = ({ countries }) => {
  // input search filter
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredCountries, setFilteredCountries] = useState(
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  );

  
  let [numberOfCountriesDisplayed, setnumberOfCountriesDisplayed] = useState(0);
  
  useEffect(() => {
    setFilteredCountries(countries);
    setnumberOfCountriesDisplayed(countries.length);
  }, [countries]);
  let [filterBy, setFilterBy] = useState("Filter by Region");
  
  
  return (
    <>
      <SearchBar
        countries={countries}
        setSearchTerm={setSearchTerm}
        setFilteredCountries={setFilteredCountries}
        setnumberOfCountriesDisplayed={setnumberOfCountriesDisplayed}
        searchTerm={searchTerm}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        numberOfCountriesDisplayed={numberOfCountriesDisplayed}
      />

      <Countries countries={filteredCountries} />
    </>
  );
};

FilterCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
