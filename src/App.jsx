import "./App.css";
import { countries } from "./countries.jsx";

function App() {
  const countriesList = countries.map((country) => {
    return (
      <div key={countries.name} className="country-card">
        <img src={country.flags.svg} alt="" />
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
  return (
    <>
      {/* <h1>Where in the world</h1> */}
      {countriesList}
    </>
  );
}

export default App;
