import { countries } from "../src/countries";
import { useState } from "react";
import { WorldCountries } from "./worldCountries";

export const FilterCountries = () => {
  
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
};
