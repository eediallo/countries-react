import "./App.css";
import { Header } from "../components/header.jsx";
import { FilterCountries } from "../components/filterCountries.jsx";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let isLoading = false;
    async function fetchCountriesData() {
      const resp = await fetch("https://restcountries.com/v3.1/all");

      if (!isLoading) {
        setCountries(await resp.json());
      }
    }
    fetchCountriesData();

    //clean up function
    return () => {
      isLoading = true;
    };
  }, []);
  return (
    <div className="App" data-theme="dark">
      <Header />
      <FilterCountries countries={countries} />
    </div>
  );
}

export default App;
