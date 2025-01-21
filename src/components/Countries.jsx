import Country from "./Country";

export const Countries = ({ countries }) => {
  return countries.map((country) => (
    <Country key={country.cca3} {...country} />
  ));
};
