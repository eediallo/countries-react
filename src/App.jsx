import "./App.css";
import { FilterCountries } from "./components/filterCountries.jsx";
import { useState, useEffect } from "react";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";

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
      <Header onSelect={ToggleMode} isDarkMode={isDarkMode} />
      <FilterCountries countries={countries} />
    </Section>
  );
}

export default App;
