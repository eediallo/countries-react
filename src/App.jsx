import "./App.css";
import { countries } from "./countries.jsx";

function App() {
  const countriesList = countries.map((country) => {
    return (
      <div key={countries.name} className="country-card">
        <h1>{country.name}</h1>
        <img src={country.flags.svg} alt="" />
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
    );
  });
  return (
    <>
      <h1>Where in the world</h1>
      {countriesList}
    </>
  );
}

export default App;
