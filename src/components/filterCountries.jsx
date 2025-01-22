import { useEffect, useState } from "react";
import { Countries } from "./Countries";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import NumberOfCountriesDisplayed from "./NumberDisplayed";
import Regions from "./Regions";
import Section from "./Section";

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

  return (
    <>
      <Section
        className="search-region-filter-container"
        sectionContainer="section"
      >
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
        <Regions
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setFilteredCountries={setFilteredCountries}
          searchTerm={searchTerm}
          countries={countries}
          setnumberOfCountriesDisplayed={setnumberOfCountriesDisplayed}
        />
      </Section>
      <Countries countries={filteredCountries} />
    </>
  );
};

FilterCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};
