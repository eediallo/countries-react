import { WorldCountries } from "../components/worldCountries";
import { countries } from "./countries.jsx";
import "./App.css";
import { Header } from "../components/header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="countries">
        <WorldCountries countries={countries} />
      </div>
    </>
  );
}

export default App;
