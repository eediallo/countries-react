import PropTypes from "prop-types";

export default function NumberOfCountriesDisplayed({
  numberOfCountriesDisplayed,
  countries,
}) {
  return (
    <p>
      Displaying {numberOfCountriesDisplayed} / {countries.length} countries
    </p>
  );
}

NumberOfCountriesDisplayed.propTypes = {
  numberOfCountriesDisplayed: PropTypes.number.isRequired,
  countries: PropTypes.array.isRequired,
};
