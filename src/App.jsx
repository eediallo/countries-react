import { WorldCountries } from "../components/worldCountries";
import { countries } from "./countries.jsx";
import "./App.css";

function App() {
  return (
    <>
      <WorldCountries countries={countries} />
    </>
  );
}

export default App;
