import "./App.css";
import { Header } from "../components/header.jsx";
import { FilterCountries } from "../components/filterCountries.jsx";
import { countries } from "./countries.jsx";

function App() {
  return (
    <>
      <Header />
      <FilterCountries countries={countries} />
    </>
  );
}

export default App;
