import PropTypes from "prop-types";

export default function SearchBar({
  setSearchTerm,
  countries,
  setFilteredCountries,
  setnumberOfCountriesDisplayed,
  searchTerm,
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
    <div className="input-search-container input-wrapper">
      <span className="material-symbols-outlined search-icon">search</span>
      <input
        value={searchTerm}
        type="text"
        placeholder="Search for a country"
        name="search-for-country"
        id="search-for-country"
        onInput={handleOnInput}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
  setFilteredCountries: PropTypes.func.isRequired,
  setnumberOfCountriesDisplayed: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
