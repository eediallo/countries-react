import PropTypes from "prop-types";
import Options from "./Options";
import Section from "./Section";

export default function Regions({
  filterBy,
  setFilterBy,
  setFilteredCountries,
  setnumberOfCountriesDisplayed,
  searchTerm,
  countries,
}) {
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
    <Section sectionContainer="div">
      <select
        value={filterBy}
        onChange={(e) => setFilterBy(e.target.value)}
        onClick={handleOnClcik}
        name="region-filter"
        id="region-filter"
      >
        <Options />
      </select>
    </Section>
  );
}

Regions.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  setFilteredCountries: PropTypes.func.isRequired,
  setnumberOfCountriesDisplayed: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
