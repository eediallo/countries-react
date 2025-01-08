import { WorldCountries } from "../components/worldCountries";
import { countries } from "./countries.jsx";
import "./App.css";
import { Header } from "../components/header.jsx";
import { useState } from "react";

function App() {
  let [searchTerm, setSeacthTerm] = useState("");
  let [filteredCountries, setFilteredCountries] = useState(countries);

  const handleOnInput = (e) => {
    const searchTerm = e.target.value.toLocaleLowerCase();
    setSeacthTerm(searchTerm);
    const filtered = countries.filter((country) => {
      const countryText =
        `${country.name} ${country.capital}`.toLocaleLowerCase();
      return countryText.includes(searchTerm);
    });
    setFilteredCountries(filtered);
  };

  return (
    <>
      <Header />
      <input
        value={searchTerm}
        type="text"
        name="search-for-country"
        id="search-for-country"
        onChange={handleOnInput}
      />
      <div className="countries">
        <WorldCountries countries={filteredCountries} />
      </div>
    </>
  );
}

export default App;
