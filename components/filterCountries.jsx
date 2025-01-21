import { useEffect, useState } from "react";
import { Countries } from "./Countries";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import NumberOfCountriesDisplayed from "./NumberDisplayed";

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

  //drop down filter
  let [filterBy, setFilterBy] = useState("Filter by Region");

  function handleOnClcik(e) {
    const filterByValue = e.target.value;
    setFilterBy(filterByValue);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name} ${country.capital} ${country.region}`.toLocaleLowerCase();
      if (filterByValue === "Filter by Region") {
        return countryText.includes(searchTerm);
      }
      return (
        countryText.includes(searchTerm) &&
        country.region.toLowerCase().includes(filterByValue.toLowerCase())
      );
    });
    setFilteredCountries(filtered);
    setnumberOfCountriesDisplayed(filtered.length);
  }

  return (
    <>
      <div className="search-region-filter-container">
        <SearchBar
          countries={countries}
          setSearchTerm={setSearchTerm}
          setFilteredCountries={setFilteredCountries}
          setnumberOfCountriesDisplayed={setnumberOfCountriesDisplayed}
          searchTerm={searchTerm}
        />
        <NumberOfCountriesDisplayed
          numberOfCountriesDisplayed={numberOfCountriesDisplayed}
          countries={countries}
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
        <Countries countries={filteredCountries} />
      </div>
    </>
  );
};

FilterCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
