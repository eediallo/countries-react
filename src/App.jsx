import "./App.css";
import { FilterCountries } from "../components/filterCountries.jsx";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  let [mode, setMode] = useState("Dark Mode");
  const [isDarkMode, setDarkMode] = useState(false);

  function handleModeToggle() {
    setDarkMode(!isDarkMode);
    setMode(isDarkMode ? "Dark Mode" : "Light Mode");
  }
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
    <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <header>
        <h1>Where in the world?</h1>
        <div>
          <p onClick={handleModeToggle}>{mode}</p>
        </div>
      </header>
      <FilterCountries countries={countries} />
    </div>
  );
}

export default App;
