import PropTypes from "prop-types";
import "./SearchBar.css";
import Section from "../Section";
import Regions from "../Regions";
import NumberOfCountriesDisplayed from "../NumberDisplayed";
import Input from "../Input/Input";

export default function SearchBar({
  setSearchTerm,
  countries,
  setFilteredCountries,
  setnumberOfCountriesDisplayed,
  searchTerm,
  filterBy,
  setFilterBy,
  numberOfCountriesDisplayed,
}) {
  const handleOnInput = (e) => {
    const searchTerm = e.target.value.toLocaleLowerCase();
    setSearchTerm(searchTerm);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name.common} ${country.capital}`.toLocaleLowerCase();
      return countryText.includes(searchTerm);
    });
    setFilteredCountries(filtered);
    setnumberOfCountriesDisplayed(filtered.length);
  };

  return (
    <Section
      className="search-region-filter-container"
      sectionContainer="section"
    >
      <Input searchTerm={searchTerm} onSelect={handleOnInput} />

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
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
  setFilteredCountries: PropTypes.func.isRequired,
  setnumberOfCountriesDisplayed: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
