export const WorldCountries = ({ countries }) => {
  return countries.map((country) => {
    return (
      <div className="country-card" key={country.cca3}>
        <img src={country.flags.svg} alt={country.name.common} />
        <div className="summary">
          <h1>{country.name.common}</h1>
          <p>
            <b>Population: </b>
            {country.population}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>Capital: </b>
            {country.capital}
          </p>
        </div>
      </div>
    );
  });
};
