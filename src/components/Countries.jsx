import Country from "./Country";

export const Countries = ({ countries }) => {
  return (
    <section className="countries">
      {countries.map((coutry) => (
        <Country key={coutry.cca3} {...coutry} />
      ))}
    </section>
  );
};
