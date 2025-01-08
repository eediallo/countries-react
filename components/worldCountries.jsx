export const WorldCountries = ({ countries }) => {
  return countries.map((country) => {
    return (
      <div key={country.name} className="country-card">
        <img src={country.flags.svg} alt={country.name} />
        <div className="summary">
          <h1>{country.name}</h1>
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
