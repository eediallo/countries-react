import PropTypes from "prop-types";

export default function Country({
  flags,
  name,
  cca3,
  population,
  region,
  capital,
}) {
  return (
    <section className="country-card" key={cca3}>
      <img src={flags.svg} alt={name.common} />
      <div className="summary">
        <h1>{name.common}</h1>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </section>
  );
}

Country.propTypes = {
  flags: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  cca3: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
