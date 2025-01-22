import "./App.css";
import { FilterCountries } from "./components/filterCountries.jsx";
import { useState, useEffect } from "react";
import darkMode from "../src/assets/dark_mode.svg";
import lightMode from "../src/assets/light_mode.svg";
import Section from "./components/Section.jsx";

function App() {
  const [countries, setCountries] = useState([]);

  const [isDarkMode, setDarkMode] = useState(false);

  function ToggleMode() {
    setDarkMode(!isDarkMode);
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
    <Section
      className="App"
      data-theme={isDarkMode ? "dark" : "light"}
      sectionContainer="div"
    >
      <header>
        <h1>Where in the world?</h1>
        <div onClick={ToggleMode} className="theme-container">
          {!isDarkMode ? (
            <img src={darkMode} alt="dark mode" />
          ) : (
            <img src={lightMode} alt="light mode" />
          )}
        </div>
      </header>
      <FilterCountries countries={countries} />
    </Section>
  );
}

export default App;
